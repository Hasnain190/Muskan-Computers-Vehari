from django.urls import path
from django_app.views import order_views as views


urlpatterns = [
    path("add/", views.addOrderItems, name="orders-add"),
    path("my-orders/", views.getMyOrders, name="my-orders"),
    
    path("<str:pk>/", views.getOrderById, name="user-order"),
  
]
