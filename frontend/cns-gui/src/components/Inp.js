import React from "react";
import InputBox from "./InputBox";

export function ComponentOne({ string2, setString2 }) {
  return (
    <InputBox
      type="text"
      label="key"
      value={string2}
      onChange={(e) => setString2(e.target.value)}
    />
  );
}

export function ComponentTwo({ string2, setString2 }) {
  return (
    <InputBox
      type="number"
      label="Shift"
      value={string2}
      onChange={(e) => setString2(e.target.value)}
      min="1"
      max="25"
    />
  );
}
export function ComponentThree({ string2, setString2 }) {
  return (
    <InputBox
      type="text"
      label="key"
      value={string2}
      onChange={(e) => setString2(e.target.value)}
    />
  );
}

export function ComponentFour({ string2, setString2 }) {
  return (
    <InputBox
      type="text"
      label="key"
      value={string2}
      onChange={(e) => setString2(e.target.value)}
    />
  );
}

export function ComponentFive({ string2, setString2 }) {
  return (
    <InputBox
      type="text"
      label="key"
      value={string2}
      onChange={(e) => setString2(e.target.value)}
    />
  );
}

