from django.urls import path
from django_app.views import cart_views as views


urlpatterns = [
    path("add/", views.addCartItems, name="cartItems-add"),
    path("my-cart/", views.getMyCart, name="my-cart"),
    path("<str:pk>/remove-cart-item/", views.removeCartItems, name="cartItems-delete"),
    path("<str:pk>/update-quantity/", views.updateQuantity, name="update-quantity"),
]
