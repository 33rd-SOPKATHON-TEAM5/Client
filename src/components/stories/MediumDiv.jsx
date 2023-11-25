import React from 'react';
import styled from 'styled-components';

import {MiddleCardImage} from '../../assets/Svgs';

const MediumDiv = () => {
  return (
    <MediumContainer>
      <Content>
      뭐에요....나쁜놈....자차가나다라마바사아자차
      4년만난 남자친구랑 헤어져서 울었어요ㅠㅠ 남자친구랑 진짜 정말로 좋아했는데 그 자식이 저를 차버렸지
      </Content>
      <UserNickName>아이디</UserNickName>
    </MediumContainer>
  );
};

export default MediumDiv;

const MediumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 14.4rem;
  border-radius: 0.6rem;
  background-image: url(${MiddleCardImage});
  padding: 1rem 2rem;
`;

const Content = styled.div``;

const UserNickName = styled.span``;
