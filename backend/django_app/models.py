from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Product(models.Model):
    """product"""

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default="/placeholder.png")
    image_1 = models.ImageField(null=True, blank=True, default="/placeholder.png")
    image_2 = models.ImageField(null=True, blank=True, default="/placeholder.png")
    image_3 = models.ImageField(null=True, blank=True, default="/placeholder.png")
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, null=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    """category for products"""

    category = models.CharField(
        max_length=200, null=True, blank=True, default="Electronics"
    )

    def __str__(self):
        return self.category


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # name
    # email
    # phone
    
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    shippingPrice = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    totalPrice = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    quantity= models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Cart #{self.id} - {self.user.username}"


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey("Product", on_delete=models.CASCADE, unique=True)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.product.name} ({self.quantity})"


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)

# For receipts
class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dateAndTime = models.DateTimeField(auto_now_add=True)
    paymentMethod = models.CharField(max_length=200)
    amount = models.DecimalField(decimal_places=2)
    payment_status = models.CharField(max_length=50)
    