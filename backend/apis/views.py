from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from apis.playfairEncrypt import *
from apis.playfairDecrypt import *
from apis.ceaserEncrypt import *
from apis.ceaserDecrypt import *




def hello_world(requeset):
    return HttpResponse("Hello World")



def playfairencrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        key = request.GET.get('key', '')

        encryptResult=encryptByPlayFair(plain_text,key)

        return JsonResponse({'encrypted_string': encryptResult.lower()})


def playfairdecrypt(request):
    if request.method == 'GET':
        en_plain_text = request.GET.get('en_plain_text', '')
        # get method takes parameter so use the parameter in the url too
        key = request.GET.get('key', '')

        decryptResult = decryptByPlayFair(en_plain_text, key)

        return JsonResponse({'decrypted_string': decryptResult.lower()})
    

def ceasercipherencrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        # get method takes parameter so use the parameter in the url too
        shift = request.GET.get('shift', '')

        encryptResult = encryptByCeaser(plain_text, int(shift))

        return JsonResponse({'encrypted_string': encryptResult.lower()})

def ceasercipherdecrypt(request):
    if request.method == 'GET':
        en_plain_text = request.GET.get('en_plain_text', '')
        # get method takes parameter so use the parameter in the url too
        shift = request.GET.get('shift', '')

        decryptResult = decryptByCeaser(en_plain_text, int(shift))

        return JsonResponse({'decrypted_string': decryptResult.lower()})