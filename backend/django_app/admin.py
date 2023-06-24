from django.contrib import admin

# Register your models here.
admin.site.site_header = "Admin"

admin.site.site_title = "Admin"

admin.site.index_title = "Adminsequent"

from .models import *

admin.site.register(Product)

admin.site.register(Order)

admin.site.register(OrderItem)

admin.site.register(ShippingAddress)

admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(CartItem)
