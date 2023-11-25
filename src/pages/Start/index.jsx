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
      <S.TextContainer>
        <S.Text>안녕.. 나는 울보산타야.</S.Text>
        <S.Text>
          우는 사람에게는 선물을 주면 안된다는데 나는 산타 자격이 없는걸까..?
        </S.Text>{" "}
        <S.Text>그래도 나는 산타니까, 선물을 주고 싶어..</S.Text>
      </S.TextContainer>
      <S.ButtonContainer>
        <Button
          customStyle="width: 80%; background-color: #FFE17E; color: #008236;"
          onClick={handleButton}
        >
          울보산타 만나러 가기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default Start;
