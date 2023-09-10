from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from apis.playfairEncrypt import *
from apis.playfairDecrypt import *

def hello_world(requeset):
    return HttpResponse("Hello World")



def playFairEncrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        key = request.GET.get('key', '')

        encryptResult=encryptByPlayFair(key, plain_text)

        return JsonResponse({'encrypted_string': encryptResult.lower()})


def playFairDecrypt(request):
    if request.method == 'GET':
        en_plain_text = request.GET.get('en_plain_text', '')
        # get method takes parameter so use the parameter in the url too
        key = request.GET.get('key', '')

        decryptResult = decryptByPlayFair(key,en_plain_text)

        return JsonResponse({'decrypted_string': decryptResult.lower()})