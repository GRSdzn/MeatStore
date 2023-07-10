from django.contrib import admin
from .models import Cart, CartItem


class CartItemInline(admin.TabularInline):
    model = CartItem


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')
    search_fields = ('id', 'user__email')  # Search by cart id and user's email
    inlines = [CartItemInline]


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'cart', 'product', 'quantity', 'sub_total')
    # Search by cart id and product title
    search_fields = ('cart__id', 'product__title')
