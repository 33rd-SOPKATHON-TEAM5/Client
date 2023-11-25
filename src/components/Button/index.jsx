/* eslint-disable react/prop-types */
import * as S from "./Button.style";

function Button({ children, disabled, customStyle, onClick }) {
  return (
    <S.Wrapper disabled={disabled} customStyle={customStyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
