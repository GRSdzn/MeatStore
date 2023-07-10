from gettext import translation
from django.db import transaction
from rest_framework import serializers
from .models import Order, OrderItem
from api.product.serializers import SimpleProductSerializer
from api.cart.models import Cart, CartItem
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings


class OrderItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    pending_status = serializers.SerializerMethodField()
    items = OrderItemSerializer(many=True, read_only=True)
    grand_total = serializers.DecimalField(max_digits=10, decimal_places=2)

    def get_pending_status(self, obj):
        status_mapping = dict(Order.STATUS_CHOICES)
        return status_mapping.get(obj.pending_status)

    def get_grand_total(self, obj):
        return obj.grand_total

    class Meta:
        model = Order
        fields = ['id', 'placed_at', 'pending_status',
                  'owner', 'items', 'grand_total']


class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.IntegerField()

    def validate_cart_id(self, cart_id):
        if not Cart.objects.filter(pk=cart_id).exists():
            raise serializers.ValidationError("This cart_id is invalid")
        elif not CartItem.objects.filter(cart_id=cart_id).exists():
            raise serializers.ValidationError("Sorry, your cart is empty")

        cart_items = CartItem.objects.filter(cart_id=cart_id)
        for cart_item in cart_items:
            if cart_item.product.stock < cart_item.quantity:
                raise serializers.ValidationError(
                    "Not enough stock available for some products")

        return cart_id

    def save(self, **kwargs):
        with transaction.atomic():
            cart_id = self.validated_data["cart_id"]
            user_id = self.context["user_id"]
            order = Order.objects.create(owner_id=user_id)
            cart_items = CartItem.objects.filter(cart_id=cart_id)

            for cart_item in cart_items:
                product = cart_item.product
                product.stock -= cart_item.quantity
                product.save()

            order_items = [
                OrderItem(
                    order=order,
                    product=item.product,
                    quantity=item.quantity
                )
                for item in cart_items
            ]
            OrderItem.objects.bulk_create(order_items)

            grand_total = order.calculate_grand_total()

            Cart.objects.filter(pk=cart_id).delete()

            subject = 'Детали заказа'
            context = {
                'order': order,
                'order_items': order_items,
                'grand_total': grand_total,
                'user': order.owner,  # Pass the user object
            }
            html_message = render_to_string('order_confirmation.html', context)
            plain_message = strip_tags(html_message)
            from_email = settings.EMAIL_HOST_USER
            to_email = order.owner.email

            send_mail(
                subject,
                plain_message,
                from_email,
                [to_email],
                html_message=html_message,
                fail_silently=False
            )

            return order


class UpdateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['pending_status']
