import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as S from "./NickName.style";

function NickName() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/onboarding/content");
  };
  return (
    <S.Wrapper>
      <S.Title>선물 받을 이름을 알려줘!</S.Title>
      <Input
        maxLength={5}
        placeholder={"이름을 입력해줘"}
        customStyle="height: 5.1rem"
      />
      <S.ButtonContainer>
        <Button onClick={handleButton} customStyle="width: 100%">
          운 이유 입력하기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default NickName;
