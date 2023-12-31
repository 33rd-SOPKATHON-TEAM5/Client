/* eslint-disable no-unused-vars */

// import { useRecoilState } from "recoil";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as S from "./SadContent.style";

import { userIdState, userNicknameState } from "../../../recoil/atom";
import { instance } from "../../../apis/api.instance";
import { useState } from "react";
import { LeaseImg, SantaImg } from "../../../assets/Images/Index";
import ProgressBar from "../../../components/ProgressBar";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router";
import axios from "axios";

function SadContent() {
  const [userRecoilId, setUserRecoilId] = useRecoilState(userIdState);
  const user_nickname = useRecoilValue(userNicknameState);
  const [cry_reason, setContent] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleButton = async () => {
    const formData = { user_nickname, cry_reason };

    //const fetchAuth = () => instance.post(`/cry`, formData);
    const API_URL = import.meta.env.VITE_APP_BASE_URL;
    const response = await axios.post(`${API_URL}/cry`, formData);

    setUserRecoilId(response.data.data.cry_id);
    console.log(response.data);

    console.log(userRecoilId);
    navigate("/card");
  };

  const onChangeInput = (e) => {
    const input = e.target.value;
    if (input.length <= 100) {
      console.log("");
    } else {
      setError(true);
    }
    setContent(input);
  };
  return (
    <S.Wrapper>
      <S.Title>울었던 이야기 하나 알려줄래...?</S.Title>
      <Input
        maxLength={100}
        customstyle="height: 12.7rem"
        onChange={onChangeInput}
        value={cry_reason}
        placeholder="울었던 이야기를 알려줘"
        errorMessage={error}
      />
      <ProgressBar pageNum={2} />
      <S.Img src={LeaseImg} />
      <S.Icon src={SantaImg} />
      <S.ButtonContainer>
        <Button
          customstyle="width: 95%; background-color: #DE332E; color: #ffff;"
          onClick={handleButton}
        >
          울보산타에게 편지 전달하기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default SadContent;
