import React from 'react';
import styled from 'styled-components';

import { SmallCardImage } from '../../assets/Svgs/Index';

// content에 가져온 데이터
// 닉네임에 get 해온 유저닉네임
const SmallDiv = (props) => {
  const {userName, cryReason} = props;
  return (
    <SmallContainer>
      <ContentDiv>
        <Content>{cryReason}</Content>
        <UserNickName>{userName}</UserNickName>
      </ContentDiv>
    </SmallContainer>
  );
};

export default SmallDiv;

const SmallContainer = styled.article`
  width: 100%;
  height: 10.6rem;
  padding: 2.8rem 2.4rem;
  border-radius: 0.6rem;
  background-image: url(${SmallCardImage});
`;

const ContentDiv = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 19.09px;
  font-weight: 600;
  color: black;
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
  color: black;
`;
