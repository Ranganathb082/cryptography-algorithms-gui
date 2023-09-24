from Crypto.Cipher import AES
def encrypt_data(text,cipher):
    ciphertext = cipher.encrypt(text)
    return ciphertext

# generate new instance with the key and nonce same as encryption cipher

def decrypt_data(key,en_text,nonce):
    cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
    plaintext = cipher.decrypt(en_text)
    return plaintext

def aes(text,key,algo):
    global nonce    
    key = key.encode()    
    cipher = AES.new(key, AES.MODE_EAX)
    text = text.encode()
    nonce = cipher.nonce
    if algo=="en":
        # print(encrypt_data(text,cipher))
        return encrypt_data(text,cipher)
        
    elif algo=="de":
        en_text = encrypt_data(text,cipher)
        # print(decrypt_data(key,en_text,nonce))
        return decrypt_data(key,en_text,nonce)

# key = b'C&F)H@McQfTjWnZr'
# cipher = AES.new(key, AES.MODE_EAX)
# data = "Welcome to copyassignment.com!".encode()
# aes("Welcome to copyassignment.com!",'C&F)H@McQfTjWnZr',"en"),
# aes("Welcome to copyassignment.com!",'C&F)H@McQfTjWnZr',"de"),


