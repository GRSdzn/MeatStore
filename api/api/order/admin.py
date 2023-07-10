from django.contrib import admin
from .models import Order, OrderItem


class OrderItemInline(admin.TabularInline):
    model = OrderItem


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'owner', 'placed_at',
                    'pending_status', 'grand_total')
    # Search by order id and owner's email
    search_fields = ('id', 'owner__email')
    inlines = [OrderItemInline]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'product', 'quantity')
    # Search by order id and product title
    search_fields = ('order__id', 'product__title')