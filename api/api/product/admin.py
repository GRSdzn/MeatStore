from django.contrib import admin
from .models import Product
from django.utils.safestring import mark_safe


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'category', 'stock', 'get_image')
    # Search by product id, title, and category name
    search_fields = ('id', 'title', 'category__name')

    def get_image(self, object):
        if object.imageUrl:
            return mark_safe(f"<img src='{object.imageUrl.url}' width=50>")

    get_image.short_description = 'imageUrl'
