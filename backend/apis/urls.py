

from os import path
from django.urls import path
from apis.views import hello_world
from apis.views import playfairencrypt
from apis.views import playfairdecrypt
from apis.views import ceasercipherencrypt
from apis.views import ceasercipherdecrypt
from apis.views import desencryptdecrypt
from apis.views import aesencryptdecrypt
from apis.views import polyencryptdecrypt


urlpatterns = [
    path('hello_world/', hello_world, name = "hello_world"),
    path('playfairencrypt/', playfairencrypt, name="playFairEncrypt" ),
    path('playfairdecrypt/',playfairdecrypt, name="playFairDecrypt" ),
    path('ceasercipherencrypt/',ceasercipherencrypt, name="ceasercipherencrypt" ),
    path('ceasercipherdecrypt/',ceasercipherdecrypt, name="ceasercipherdecrypt" ),
    path('desencryptdecrypt/',desencryptdecrypt, name="desencryptdecrypt" ),
    path('aesencryptdecrypt/',aesencryptdecrypt, name="aesencryptdecrypt" ),
    path('polyencryptdecrypt/',polyencryptdecrypt, name="polyencryptdecrypt" ),
]