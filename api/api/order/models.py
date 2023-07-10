from django.db import models
from accounts.models import UserAccount
from api.product.models import Product


class Order(models.Model):
    PENDING = 'P'
    IN_TRANSIT = 'T'
    DELIVERED = 'D'

    STATUS_CHOICES = [
        (PENDING, 'Принят в обработку'),
        (IN_TRANSIT, 'Доставляется'),
        (DELIVERED, 'Доставлен'),
    ]

    owner = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    placed_at = models.DateTimeField(auto_now_add=True)
    pending_status = models.CharField(
        max_length=1, choices=STATUS_CHOICES, default=PENDING)
    grand_total = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)

    def calculate_grand_total(self):
        total = sum(item.product.price *
                    item.quantity for item in self.items.all())
        self.grand_total = total
        self.save()
        return total

    def __str__(self):
        return f"Заказ {self.id} от {self.owner.email}"


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"Товар заказа: {self.product.title}"
