import React from "react";
import styled from "styled-components";

import { BigCardImage } from "../../assets/Svgs/Index";

const LargeDiv = () => {
  return (
    <LargeContainer>
      <ContentDiv>
        <Content>
          가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
        </Content>
        <UserNickName>아이디</UserNickName>
      </ContentDiv>
    </LargeContainer>
  );
};

export default LargeDiv;

const LargeContainer = styled.article`
  width: 100%;
  height: 18.1rem;
  padding: 2.8rem 2.4rem;
  border-radius: 0.6rem;
  background-image: url(${BigCardImage});
`;

const ContentDiv = styled.div`
  position: relative;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.09px;
  color: #f7f7f7;
`;

const UserNickName = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.36px;

  color: #f7f7f7;
`;
