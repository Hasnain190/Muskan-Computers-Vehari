from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django_app.serializers import ProductSerializer, CategorySerializer
from django_app.models import Product, Category
from rest_framework import status


@api_view(["GET"])
@authentication_classes([])  # Add this
@permission_classes([])  # Maybe add this too
def getCategoryList(request):
    product_category = Category.objects.all()
    serializer = CategorySerializer(product_category, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@authentication_classes([])  # Add this
@permission_classes([])  # Maybe add this too
def productsByCategory(request, pk):
    category = Category.objects.get(id=pk)
    products = category.product_set.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
