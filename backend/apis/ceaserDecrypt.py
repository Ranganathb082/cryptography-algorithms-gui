def decryptByCeaser(en_plain_text, shift):
    
    #enter your encrypted message(string) below
    encrypted_message = en_plain_text
    
    letters="abcdefghijklmnopqrstuvwxyz"
    
    #enter the key value to decrypt
    k = shift
    decrypted_message = ""

    for ch in encrypted_message:

        if ch in letters:
            position = letters.find(ch)
            new_pos = (position - k) % 26
            new_char = letters[new_pos]
            decrypted_message += new_char
        else:
            decrypted_message += ch
    # print("Your decrypted message is:\n")
    # print(decrypted_message)
    return decrypted_message