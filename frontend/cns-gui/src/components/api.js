// api.js

export function playFairEncryptAPI(plainText, key) {
    return fetch(`http://127.0.0.1:8000/apis/playfairencrypt/?plain_text=${plainText}&key=${key}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        return {"encrypted_string": data.data.encrypted_string, "matrix" : data.data.matrix}
      })
    //   .then(data => data)
    //   .then(data => console.log(data.data.encrypted_string))
    //   .then(data => console.log(data.data.matrix[0]))
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  export function ceaserCipherEncryptAPI(plainText, shift) {
    return fetch(`http://127.0.0.1:8000/apis/ceasercipherencrypt/?plain_text=${plainText}&shift=${shift}`)
      .then(response => response.json())
      .then(data => data.encrypted_string)
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  export function playFairDecryptAPI(enPlainText, key) {
    return fetch(`http://127.0.0.1:8000/apis/playfairdecrypt/?en_plain_text=${enPlainText}&key=${key}`)
      .then(response => response.json())
      .then(data => data.decrypted_string)
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  export function ceaserCipherDecryptAPI(enPlainText, shift) {
    return fetch(`http://127.0.0.1:8000/apis/ceasercipherdecrypt/?en_plain_text=${enPlainText}&shift=${shift}`)
      .then(response => response.json())
      .then(data => data.decrypted_string)
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  export function desEncryptDecrypt(text, key, algo) {
    return fetch(`http://127.0.0.1:8000/apis/desencryptdecrypt/?plain_text=${text}&key=${key}&algo=${algo}`)
      .then(response => response.json())
      // .then(data => data.encrypted_string.encrypted_string)
      .then(data => {
        // console.log("data", data.encrypted_string.encrypted_string);
        if(algo==="en"){
          return {"encrypted_string":data.encrypted_string.encrypted_string}
        }else{
          return {"decrypted_string":data.decrypted_string.decrypted_string}
        }
      })
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  
  export function aesEncryptDecrypt(text, key, algo) {
    return fetch(`http://127.0.0.1:8000/apis/aesencryptdecrypt/?plain_text=${text}&key=${key}&algo=${algo}`)
      .then(response => response.json())
      // .then(data => data.encrypted_string.encrypted_string)
      .then(data => {
        // console.log("data", data);
        if(algo==="en"){
          return {"encrypted_string":data.encrypted_string}
        }else{
          return {"decrypted_string":data.decrypted_string}
        }
      })
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  
  
  export function polyEncryptDecrypt(text, key, algo) {
    return fetch(`http://127.0.0.1:8000/apis/polyencryptdecrypt/?plain_text=${text}&key=${key}&algo=${algo}`)
      .then(response => response.json())
      // .then(data => data.encrypted_string.encrypted_string)
      .then(data => {
        // console.log("data", data.encrypted_string.encrypted_string);
        if(algo==="en"){
          return {"encrypted_string":data.encrypted_string}
        }else{
          return {"decrypted_string":data.decrypted_string}
        }
      })
      .catch(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught in the component
      });
  }
  