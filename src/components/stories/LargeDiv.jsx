import React from "react";
import styled from "styled-components";

import { BigCardImage } from "../../assets/Svgs/Index";

const LargeDiv = (props) => {
  const { userName, cryReason } = props;
  return (
    <LargeContainer>
      <ContentDiv>
        <Content>{cryReason}</Content>
        <UserNickName>{userName}</UserNickName>
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
  background-color: #008236;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.09px;
  color: #f7f7f7;
  text-align: center;
`;

const UserNickName = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.36px;
  color: #f7f7f7;
`;
