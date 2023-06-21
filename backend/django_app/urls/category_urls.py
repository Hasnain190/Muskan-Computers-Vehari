from django.urls import path
from django_app.views import category_views as views


urlpatterns = [
    path("category-list/", views.getCategoryList, name="category-list"),
    path("<str:pk>/", views.productsByCategory, name="category"),
]
