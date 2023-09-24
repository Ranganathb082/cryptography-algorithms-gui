
import string


ALPHABET = string.ascii_lowercase
CHARACTERS_THAT_MUST_REMAIN_THE_SAME = string.digits + string.punctuation + string.whitespace

def cycle_get(lst,index):
    new_index = index % len(lst)
    return(lst[new_index])

def cycle_increment_index(index,lst):
    if index == len(lst) - 1:
        index = 0
    else:
        index += 1
    return(index)

def shift(letter,value):
    current_letter_value = ALPHABET.find(letter)
    end_value = current_letter_value + value
    return(cycle_get(ALPHABET,end_value))

def convert_key_to_numbers(key):
    return([ALPHABET.find(i) for i in key])

def encrypt(text,key,reverse_operation=False):
    text = text.lower()
    key = convert_key_to_numbers(key)
    index_of_key = 0
    result = ""
    for char in text:
        if char in CHARACTERS_THAT_MUST_REMAIN_THE_SAME:
            result += char
        else:
            if not reverse_operation:
                result += shift(char,key[index_of_key])
            else:
                result += shift(char,- key[index_of_key])
            index_of_key = cycle_increment_index(index_of_key,key)
    return(result)

def decrypt(en_text,key):
    return(encrypt(en_text,key,reverse_operation=True))



def poly(text,key,algo):
    if algo=="en":
        return encrypt(text,key)
    else:
        return decrypt(text,key)

# print(encrypt("GEEKSFORGEEKS","AYUSH"))
# print(decrypt("fddjrenqfddjr","AYUSH"))