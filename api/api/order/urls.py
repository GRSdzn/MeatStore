from django.urls import path
from .views import OrderViewSet

app_name = 'order'

urlpatterns = [
    path('orders/',
         OrderViewSet.as_view({'get': 'list', 'post': 'create'}), name='order-list'),
    path('orders/<int:pk>/', OrderViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'}), name='order-detail'),
]
