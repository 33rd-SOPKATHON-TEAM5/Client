// import { useRecoilState } from "recoil";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as S from "./SadContent.style";
// import { userIdState } from "../../../recoil/atom";
//import { instance } from "../../../apis/api.instance";
import { useState } from "react";
import { LeaseImg, SantaImg } from "../../../assets/Images/Index";

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

  const onChangeInput = (e) => {
    const input = e.target.value;
    if (input.length <= 100) {
      console.log("");
    } else {
      console.log("100자이하");
    }
    setContent(input);
  };
  return (
    <S.Wrapper>
      <S.Title>울었던 이야기 하나 알려줄래...?</S.Title>
      <Input
        maxLength={100}
        customStyle="height: 12.7rem"
        onChange={onChangeInput}
        value={content}
        placeholder="울었던 이야기를 알려줘"
      />
      <S.Img src={LeaseImg} />
      <S.Icon src={SantaImg} />
      <S.ButtonContainer>
        <Button customStyle="width: 95%; background-color: #DE332E; color: #ffff;">
          울보산타에게 편지 전달하기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default SadContent;
