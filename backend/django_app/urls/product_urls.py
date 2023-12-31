from django.urls import path
from django_app.views import product_views as views


urlpatterns = [
    path("", views.getProducts, name="products"),
    path("<str:pk>/", views.getProduct, name="product"),
]
