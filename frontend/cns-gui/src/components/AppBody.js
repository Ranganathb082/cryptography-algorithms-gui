import Navbar from "./NavBar";
import InputBox from "./InputBox";
import React, { useState } from "react";
import Btn from "./Btn";
import Radio from "./Radio";

function AppBody() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);

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

  const playFairEncrypt = () => {
    if (selectedOption === "Playfair") {
      fetch(
        `http://127.0.0.1:8000/apis/playfairencrypt/?plain_text=${string1}&key=${string2}`
      )
        .then((response) => response.json())
        .then((data) => setResult(data.encrypted_string))
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "CeaserCipher") {
      fetch(
        `http://127.0.0.1:8000/apis/ceasercipherencrypt/?plain_text=${string1}&shift=${string2}`
      )
        .then((response) => response.json())
        .then((data) => setResult(data.encrypted_string))
        .catch((error) => console.error("Error:", error));
    }
  };

  const playFairDecrypt = () => {
    if (selectedOption === "Playfair") {
      fetch(
        `http://127.0.0.1:8000/apis/playfairdecrypt/?en_plain_text=${result}&key=${string2}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setResult(data.decrypted_string);
        })
        .catch((error) => console.error("Error:", error));
    } else if (selectedOption === "CeaserCipher") {
      fetch(
        `http://127.0.0.1:8000/apis/ceasercipherdecrypt/?en_plain_text=${result}&shift=${string2}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setResult(data.decrypted_string);
        })
        .catch((error) => console.error("Error:", error));
    }
  };

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

        {flag ? (
          <InputBox
            type="number"
            label="Shift"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
            min="1"
            max="25"
          />
        ) : (
          <InputBox
            type="text"
            label="key"
            value={string2}
            onChange={(e) => setString2(e.target.value)}
          />
        )}

        {/* <InputBox
          label="Plain Text"
          value={string2}
          onChange={(e) => setString2(e.target.value)}
        /> */}
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
        </div>
      </div>
      {/* <h3 className="text-center mt-5">The string is {selectedOption}</h3> */}
      <div className="flex justify-center mt-4">
        <Btn value="Encrypt" onClick={playFairEncrypt} />
        <Btn value="Decrypt" onClick={playFairDecrypt} />
      </div>
      <h3 className="text-center mt-5">String is {result}</h3>
      <h3 className="text-center mt-5">String is {flag}</h3>

      {/* { flag &&
        <InputBox
          label="Plain Text"
          value={string2}
          onChange={(e) => setString2(e.target.value)}
        />
      } */}
    </div>
  );
}

export default AppBody;
