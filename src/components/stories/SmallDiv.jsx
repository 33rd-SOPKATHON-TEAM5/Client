import React from 'react';
import styled from 'styled-components';

import { SmallCardImage } from '../../assets/Svgs/Index';

// content에 가져온 데이터
// 닉네임에 get 해온 유저닉네임
const SmallDiv = () => {
  return (
    <SmallContainer>
      <ContentDiv>
        <Content>4년만난 남자친구랑 헤어져서 울었어요ㅠㅠㅠ</Content>
        <UserNickName>닉네임</UserNickName>
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
font-size: 16px;
line-height: 19.09px;
font-weight: 600;
color: black;
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
  color: black;
`;
