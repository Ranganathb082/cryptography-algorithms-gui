

from os import path
from django.urls import path
from apis.views import hello_world
from apis.views import playfairencrypt
from apis.views import playfairdecrypt
from apis.views import ceasercipherencrypt
from apis.views import ceasercipherdecrypt

urlpatterns = [
    path('hello_world/', hello_world, name = "hello_world"),
    path('playfairencrypt/', playfairencrypt, name="playFairEncrypt" ),
    path('playfairdecrypt/',playfairdecrypt, name="playFairDecrypt" ),
    path('ceasercipherencrypt/',ceasercipherencrypt, name="ceasercipherencrypt" ),
    path('ceasercipherdecrypt/',ceasercipherdecrypt, name="ceasercipherdecrypt" )
]