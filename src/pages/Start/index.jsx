import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./Start.style";

function Start() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/onboarding/nickname");
    console.log("클릭");
  };
  return (
    <S.Wrapper>
      <S.StartImg>이미지</S.StartImg>
      <S.ButtonContainer>
        <Button customStyle="width: 80%" onClick={handleButton}>
          울보산타 만나러 가기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default Start;
