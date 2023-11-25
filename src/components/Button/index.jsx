/* eslint-disable react/prop-types */
import * as S from "./Button.style";

function Button({ children, disabled, customstyle, onClick }) {
  return (
    <S.Wrapper disabled={disabled} customstyle={customstyle} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
