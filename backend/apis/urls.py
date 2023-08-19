

from os import path
from django.urls import path
from apis.views import hello_world

urlpatterns = [
    path('hello_world/', hello_world, name = "hello_world")
]