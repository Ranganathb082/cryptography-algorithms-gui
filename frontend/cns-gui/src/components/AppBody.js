import Navbar from "./NavBar";
import InputBox from "./InputBox";
import React, { useState } from "react";
import Btn from "./Btn";
import Radio from "./Radio";
import { Matrix } from "./Matrix";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  playFairEncryptAPI,
  ceaserCipherEncryptAPI,
  playFairDecryptAPI,
  ceaserCipherDecryptAPI,
  desEncryptDecrypt,
  aesEncryptDecrypt,
  polyEncryptDecrypt,
} from "./api";

import {
  ComponentOne,
  ComponentTwo,
  ComponentThree,
  ComponentFour,
  ComponentFive,
} from "./Inp";

function AppBody() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);
  const [matrix, setMatrix] = useState([]);
  const [condition, setCondition] = useState("ComponentOne");
  const [row, setRow] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(event) {
    setSelectedOption(event.target.value);
    console.log();
    if (event.target.value === "CeaserCipher") {
      setFlag(true);
      console.log("flag");
    } else {
      setFlag(false);
    }
  }

  const hasNumbers = (str) => {
    return /\d/.test(str);
  };

  const playFairEncrypt = () => {
    if (selectedOption === "Playfair") {
      if (hasNumbers(string2) !== true && hasNumbers(string1) !== true) {
        playFairEncryptAPI(string1, string2)
          // .then((encryptedString,matrix) => setResult(encryptedString))
          .then((result) => {
            // console.log(result.encrypted_string);
            setResult(result.encrypted_string);
            setMatrix(result.matrix);
            console.log(result.matrix);
          })
          // .then((data) => setResult(data))
          .catch((error) => console.error("Error:", error));
        setRow(true);
      } else {
        // console.log("As");
        toast.error("Don't include Numbers in plain text or key!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // toast("");
      }
    } else if (selectedOption === "CeaserCipher") {
      ceaserCipherEncryptAPI(string1, string2)
        .then((encryptedString) => setResult(encryptedString))
        .catch((error) => console.error("Error:", error));
      setRow(false);
    } else if (selectedOption === "DES") {
      desEncryptDecrypt(string1, string2, "en")
        .then((data) => {
          // console.log("data is",data.encrypted_string);
          setResult(data.encrypted_string);
        })
        .catch((error) => console.error("Error:", error));
      setRow(false);
    } else if (selectedOption === "AES") {
      if (string2.length>=16) {
        aesEncryptDecrypt(string1, string2, "en")
          .then((data) => {
            console.log("data is", data);
            setResult(data.encrypted_string);
          })
          .catch((error) => console.error("Error:", error));
        setRow(false);
      }else{
        toast.error("Key length should be greater than or euqal to 16!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else if (selectedOption === "PolyCipher") {
      polyEncryptDecrypt(string1, string2, "en")
        .then((data) => {
          // console.log("data is",data.encrypted_string);
          setResult(data.encrypted_string);
        })
        .catch((error) => console.error("Error:", error));
      setRow(false);
    }
  };

  const playFairDecrypt = () => {
    if (selectedOption === "Playfair") {
      playFairDecryptAPI(result, string2)
        .then((decryptedString) => setResult(decryptedString))
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "CeaserCipher") {
      ceaserCipherDecryptAPI(result, string2)
        .then((decryptedString) => setResult(decryptedString))
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "DES") {
      desEncryptDecrypt(result, string2, "de")
        .then((data) => {
          // console.log("datat i", data.decrypted_string);
          setResult(data.decrypted_string);
        })
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "AES") {
      aesEncryptDecrypt(string1, string2, "de")
        .then((data) => {
          // console.log("datat i", data.decrypted_string);
          setResult(data.decrypted_string);
        })
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "PolyCipher") {
      polyEncryptDecrypt(result, string2, "de")
        .then((data) => {
          // console.log("datat i", data.decrypted_string);
          setResult(data.decrypted_string);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  let componentToRender = (
    <ComponentOne string2={string2} setString2={setString2} />
  );

  if (selectedOption === "Playfair") {
    componentToRender = (
      <ComponentOne string2={string2} setString2={setString2} />
    );
  } else if (selectedOption === "CeaserCipher") {
    componentToRender = (
      <ComponentTwo string2={string2} setString2={setString2} />
    );
  } else if (selectedOption === "DES") {
    componentToRender = (
      <ComponentThree string2={string2} setString2={setString2} />
    );
  } else if (selectedOption === "DES") {
    componentToRender = (
      <ComponentFour string2={string2} setString2={setString2} />
    );
  } else if (selectedOption === "PolyCipher") {
    componentToRender = (
      <ComponentFive string2={string2} setString2={setString2} />
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center mt-8">
        <InputBox
          type="text"
          label="plain text"
          value={string1}
          onChange={(e) => setString1(e.target.value)}
        />

        {componentToRender}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center  mt-8">
          <Radio
            value="Playfair"
            checked={selectedOption === "Playfair"}
            onChange={handleChange}
          />

          <Radio
            value="CeaserCipher"
            selectedOption={selectedOption === "CeaserCipher"}
            onChange={handleChange}
          />

          <Radio
            value="DES"
            selectedOption={selectedOption === "DES"}
            onChange={handleChange}
          />

          <Radio
            value="AES"
            selectedOption={selectedOption === "AES"}
            onChange={handleChange}
          />

          <Radio
            value="PolyCipher"
            selectedOption={selectedOption === "PolyCipher"}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* <h3 className="text-center mt-5">The string is {selectedOption}</h3> */}
      <div className="flex justify-center mt-4">
        <Btn value="Encrypt" onClick={playFairEncrypt} />
        <Btn value="Decrypt" onClick={playFairDecrypt} />
      </div>
      <h3 className="text-center mt-5">String is {result}</h3>
      {/* <h3 className="text-center mt-5">Matrix is {matrix}</h3> */}
      {/* <h3 className="text-center mt-5">String is {flag}</h3> */}

      {row ? <Matrix matrix={matrix} /> : <></>}
      <ToastContainer />
    </div>
  );
}

export default AppBody;
