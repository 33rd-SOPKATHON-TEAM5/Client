/* eslint-disable react/prop-types */

import * as S from "./Input.style";

function Input({
  value,
  placeholder,
  disabled,
  customStyle,
  maxLength,
  onChange,
}) {
  return (
    <S.Wrapper
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      customStyle={customStyle}
      maxLength={maxLength}
    />
  );
}

export default Input;
