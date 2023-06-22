from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django_app.models import Product
from django_app.serializers import ProductSerializer

from rest_framework import status


@api_view(["GET"])
def getProducts(request):
    query = request.query_params.get("keyword")
    if query == None:
        query = ""

    products = Product.objects.filter(name__icontains=query).order_by("-createdAt")

    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
