// import { useRecoilState } from "recoil";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as S from "./SadContent.style";
// import { userIdState } from "../../../recoil/atom";
//import { instance } from "../../../apis/api.instance";
import { useState } from "react";

function SadContent() {
  // const [userRecoilId, setUserRecoilId] = useRecoilState(userIdState);
  const [content, setContent] = useState("");

  // const handleButton = () => {
  //   const formData = [];
  //   const fetchAuth = () => instance.post(``, formData);
  //   fetchAuth().then((response) => {
  //   const userId = response.data.id;
  //     // setUserRecoilId(userId);
  //   });
  // };

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };
  return (
    <S.Wrapper>
      <S.Title>울었던 경험 하나 알려줘!</S.Title>
      <Input
        maxLength={100}
        customStyle="height: 12.7rem"
        onChange={handleChangeInput}
        value={content}
      />
      <S.ButtonContainer>
        <Button>제출하기</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default SadContent;
