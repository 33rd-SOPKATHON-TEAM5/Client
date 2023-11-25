/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./Input.style";

function Input({ value, placeholder, disabled, customStyle, maxLength }) {
  const [inputCount, setInputCount] = useState("");
  const handleInput = (e) => {
    setInputCount(e.target.value.length);
    console.log(inputCount);
  };
  return (
    <S.Wrapper
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
      disabled={disabled}
      customStyle={customStyle}
      maxLength={maxLength}
    />
  );
}

export default Input;
