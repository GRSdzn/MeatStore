from django.urls import path
from .views import CartView, CartItemView, CartClearView

urlpatterns = [
    path('cart/', CartView.as_view(), name='cart'),
    path('cart/items/', CartItemView.as_view(), name='cart-items'),
    path('cart/items/<int:item_id>/',
         CartItemView.as_view(), name='cart-item-detail'),
    path('cart/clear/', CartClearView.as_view(), name='clear-cart'),
]
