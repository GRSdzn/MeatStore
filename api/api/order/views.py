from django.db import transaction
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Order
from .serializers import OrderSerializer, CreateOrderSerializer, UpdateOrderSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from accounts.models import UserAccount


class OrderViewSet(ModelViewSet):
    http_method_names = ["get", "patch", "post", "delete", "options", "head"]

    def get_permissions(self):
        if self.request.method in ["PATCH", "DELETE"]:
            return [IsAdminUser()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        serializer = CreateOrderSerializer(data=request.data, context={
                                           "user_id": self.request.user.id})
        serializer.is_valid(raise_exception=True)

        with transaction.atomic():
            order = serializer.save()

        serializer = OrderSerializer(order)
        return Response(serializer.data)

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateOrderSerializer
        elif self.request.method == 'PATCH':
            return UpdateOrderSerializer
        return OrderSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Order.objects.all()
        # Check if the user is authenticated before filtering by owner
        if user.is_authenticated:
            return Order.objects.filter(owner=user)
        # Handle the case when the user is not authenticated
        return Order.objects.none()
