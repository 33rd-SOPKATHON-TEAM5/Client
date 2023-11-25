/* eslint-disable react/prop-types */
import * as S from "./Button.style";

function Button({ children, disabled }) {
  return <S.Wrapper disabled={disabled}>{children}</S.Wrapper>;
}

export default Button;
