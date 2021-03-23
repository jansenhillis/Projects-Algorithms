from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_attack/', views.add_attack, name='add_attack'),
]
