from django.contrib import admin
from django.urls import path
from .views import CategoryList, CategoryDetail

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/detail/<int:pk>/',
         CategoryDetail.as_view(), name='category-detail'),
]
