from django.urls import path, include

urlpatterns = [
    path('', include('api.category.urls')),
    path('', include('api.product.urls')),
    path('', include('api.cart.urls')),
    path('', include('api.order.urls')),
]
