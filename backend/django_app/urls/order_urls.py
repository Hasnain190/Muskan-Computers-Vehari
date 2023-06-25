from django.urls import path
from django_app.views import order_views as views


urlpatterns = [
    path("create/", views.createOrder, name="create-order"),
    path("my-orders/", views.getMyOrders, name="my-orders"),
    
    path("<str:pk>/", views.getOrderById, name="user-order"),
  
]
