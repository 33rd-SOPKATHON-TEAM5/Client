/* eslint-disable react/prop-types */
import * as S from "./Input.style";

function Input({ value, placeholder, onChange, disabled, height }) {
  return (
    <S.Wrapper
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      $height={height}
    />
  );
}

export default Input;
