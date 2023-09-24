from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from apis.playfairEncrypt import *
from apis.playfairDecrypt import *
from apis.ceaserEncrypt import *
from apis.ceaserDecrypt import *
from apis.desEnc import *
from apis.aes import *
from apis.poly import *



def hello_world(requeset):
    return HttpResponse("Hello World")



def playfairencrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        key = request.GET.get('key', '')

        # encryptResult=encryptByPlayFair(plain_text,key)

        encryptResult, matrix = encryptByPlayFair(plain_text, key)
        data = {'encrypted_string': encryptResult.lower(), 'matrix': matrix}
        return JsonResponse({'data': data})
        # return JsonResponse({'encrypted_string': encryptResult.lower()})


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
    
    
def desencryptdecrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        # get method takes parameter so use the parameter in the url too
        key = request.GET.get('key', '')
        algo = request.GET.get('algo', '')

        result = DesEncDec(plain_text, key, algo)
        # print(result)
        if algo=="en":
            result ={'encrypted_string': result.upper()}
            return JsonResponse({'encrypted_string':result})
        elif algo=="de":
            result ={'decrypted_string': result.upper()}
            return JsonResponse({'decrypted_string': result})

   
def aesencryptdecrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        # get method takes parameter so use the parameter in the url too
        key = request.GET.get('key', '')
        algo = request.GET.get('algo', '')

        result = aes(plain_text, key, algo)
        print(result)
        if algo=="en":
            result ={'encrypted_string': result}
            print("result is")
            return JsonResponse({'encrypted_string':result["encrypted_string"].decode('latin-1')})
        elif algo=="de":
            result ={'decrypted_string': result}
            print("result is actually ", result["decrypted_string"])
            return JsonResponse({'decrypted_string': result["decrypted_string"].decode('latin-1')})
        


def polyencryptdecrypt(request):
    if request.method == 'GET':
        plain_text = request.GET.get('plain_text', '')
        key = request.GET.get('key', '')
        algo = request.GET.get('algo', '')

        result = poly(plain_text, key, algo)
        print(result)
        if algo=="en":
            result ={'encrypted_string': result}
            print("result is")
            return JsonResponse({'encrypted_string':result["encrypted_string"]})
            # return JsonResponse({'encrypted_string':result})
        elif algo=="de":
            result ={'decrypted_string': result}
            print("result is actually ", result["decrypted_string"])
            return JsonResponse({'decrypted_string': result["decrypted_string"]})
            # return JsonResponse({'decrypted_string': result})


