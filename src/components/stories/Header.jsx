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
  padding: 4.9rem 0 1.4rem 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.9rem;

  font-size: 1.6rem;
  font-weight: 600;

`;

const ResultNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.1rem;

  font-size: 2rem;
  font-weight: 500;
`;
