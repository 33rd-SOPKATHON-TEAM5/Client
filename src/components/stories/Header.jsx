import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>지금까지 울보산타에게 선물 받은 사람 수</Title>
      <ResultNum>N명</ResultNum>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

const ResultNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
`;
