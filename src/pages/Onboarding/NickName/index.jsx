import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as S from "./NickName.style";
import { PreSentImg } from "../../../assets/Images/Index";
import ProgressBar from "../../../components/ProgressBar";
import { useState } from "react";

function NickName() {
  const [nickname, setNickname] = useState();
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/onboarding/content");
  };
  const onChangeInput = (e) => {
    const input = e.target.value;

    setNickname(input);
  };
  // const isInputEmpty = !(nickname === "");
  return (
    <S.Wrapper>
      <S.Title>선물 받을 별명 알려줘!</S.Title>
      <Input
        maxLength={5}
        placeholder={"별명 입력해줘"}
        customStyle="height: 5.1rem"
        onChange={onChangeInput}
        value={nickname}
      />
      <ProgressBar pageNum={1} />
      <S.Img src={PreSentImg} />
      <S.ButtonContainer>
        <Button
          onClick={handleButton}
          customStyle="width: 90%; background-color: #DE332E; color: #ffff;"
        >
          울었던 이야기 쓰러가기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default NickName;
