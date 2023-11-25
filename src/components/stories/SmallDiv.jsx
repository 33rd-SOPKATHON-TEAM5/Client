import React from 'react';
import styled from 'styled-components';

const SmallDiv = () => {
  return (
    <SmallContainer>
      <Content>4년만난 남자친구랑 헤어져서 울었어요ㅠㅠㅠ</Content>
      <UserNickName>아이디</UserNickName>
    </SmallContainer>
  );
};

export default SmallDiv;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10.6rem;
  border-radius: 0.6rem;
  background-color: grey;
  padding: 1rem 2rem;
`;

const Content = styled.div``;

const UserNickName = styled.span``;
