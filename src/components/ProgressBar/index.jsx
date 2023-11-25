/* eslint-disable react/prop-types */
import { Dot } from "../../assets/Images/Index";
import * as S from "./ProgressBar.style";

function ProgressBar({ pageNum }) {
  return (
    <S.Wrapper>
      {pageNum == 1 ? (
        <S.DotContainer>
          <S.Img src={Dot} />
          <S.Img src={Dot} customStyle="opacity: 0.3;" />
        </S.DotContainer>
      ) : (
        <S.DotContainer>
          <S.Img src={Dot} customStyle="opacity: 0.3;" />
          <S.Img src={Dot} />
        </S.DotContainer>
      )}
    </S.Wrapper>
  );
}

export default ProgressBar;
