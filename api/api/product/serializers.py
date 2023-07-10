from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'price',
                  'category', 'imageUrl', 'stock')


class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'price', 'imageUrl']
