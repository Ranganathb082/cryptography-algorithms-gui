

from os import path
from django.urls import path
from apis.views import hello_world
from apis.views import playFairEncrypt
from apis.views import playFairDecrypt

urlpatterns = [
    path('hello_world/', hello_world, name = "hello_world"),
    path('playfairencrypt/', playFairEncrypt, name="playFairEncrypt" ),
    path('playfairdecrypt/',playFairDecrypt, name="playFairDecrypt" )
]