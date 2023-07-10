from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            cart = Cart.objects.create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)


class CartItemView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartItemSerializer(data=request.data)

        if serializer.is_valid():
            product = serializer.validated_data['product']
            quantity = serializer.validated_data['quantity']

            existing_items = CartItem.objects.filter(
                cart=cart, product=product)
            total_quantity = sum(
                item.quantity for item in existing_items) + quantity

            if total_quantity > product.stock:
                return Response({"error": "Exceeds available stock quantity."}, status=status.HTTP_400_BAD_REQUEST)

            try:
                item = existing_items.get()
                item.quantity += quantity
                if item.quantity > product.stock:
                    return Response({"error": "Not enough stock available."}, status=status.HTTP_400_BAD_REQUEST)
                item.save()
            except CartItem.DoesNotExist:
                if quantity > product.stock:
                    return Response({"error": "Not enough stock available."}, status=status.HTTP_400_BAD_REQUEST)
                item = serializer.save(cart=cart)

            serializer = CartItemSerializer(item)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, item_id):
        try:
            cart_item = CartItem.objects.get(
                id=item_id, cart__user=request.user)
            product = cart_item.product
            product.stock = min(
                product.stock + cart_item.quantity, product.stock)
            product.save()
            cart_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class CartClearView(APIView):
    def delete(self, request):
        try:
            cart = Cart.objects.get(user=request.user)
            cart.items.all().delete()  # Use the correct related name here
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Cart.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
