from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django_app.models import Product, Order, OrderItem, ShippingAddress, Cart, CartItem
from django_app.serializers import CartItemSerializer, CartSerializer

from rest_framework import status
from datetime import datetime


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addCartItems(request):
    user = request.user
    data = request.data

    # (1) Create Cart

    cart, created = Cart.objects.get_or_create(
        user=user,
    )

    # (2) Create order items adn set order to orderItem relationship

    product = Product.objects.get(id=data["product"])

    if CartItem.objects.filter(product=product, cart=cart).exists():
        message = {"detail": "Product already in cart."}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    item = CartItem.objects.create(
        product=product,
        cart=cart,
        quantity=data["quantity"],
    )

    serializer = CartItemSerializer(item)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getMyCart(request):
    user = request.user
    try:
        cart = Cart.objects.get(user= user)
        cartItems = CartItem.objects.filter(cart=cart)
    
        serializer = CartItemSerializer(cartItems, many=True)
        return Response(serializer.data)
    except Cart.DoesNotExist:
        message= {"detail":"Cart does not exist"}
        return Response(message,status=status.HTTP_404_NOT_FOUND)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def removeCartItems(request, pk):
    user = request.user
    product = Product.objects.get(id=pk)
    cart = Cart.objects.get(user= user) 

    cartItem = CartItem.objects.filter(product=product, cart=cart)
    cartItems = CartItem.objects.filter(cart=cart)
   
    if cartItem.exists():
        cartItem.delete()
        message = {"detail": "Cart items removed successfully."}
        if cartItems.__len__() ==0:
            cart.delete()
        return Response(message, status=status.HTTP_204_NO_CONTENT)
    else:
        message = {"detail": "Cart items do not exist."}
        return Response(message, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateQuantity(request, pk):
    quantity = request.data["quantity"]

    user = request.user
    product = Product.objects.get(id=pk)
    cart = user.cart_set.all()

    cartItem = CartItem.objects.get(product=product, cart=cart)

    cartItem.quantity = quantity
    cartItem.save()

    serializer = CartItemSerializer(cartItem, many=True)
    return Response(serializer.data)
