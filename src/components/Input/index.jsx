/* eslint-disable react/prop-types */

import * as S from "./Input.style";

function Input({
  value,
  placeholder,
  disabled,

  customstyle,

  maxLength,
  onChange,
  errorMessage,
}) {
  return (
    <>
      <S.Wrapper
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        customstyle={customstyle}
        maxLength={maxLength}
      />
      {errorMessage && <S.Error>글자수를 초과 했어!</S.Error>}
    </>
  );
}

export default Input;
