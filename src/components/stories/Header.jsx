import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <HeaderContainer>
      <Title>지금까지 울보산타에게 선물 받은 사람 수</Title>
      <ResultNum>{`${props.allLength}명`}</ResultNum>
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
  padding: 4.9rem 0 1.6rem 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.9rem;

  font-family: Pretendard;

  font-style: normal;

  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  color: black;
`;

const ResultNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.1rem;

  font-family: EliceDXNeolli;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  line-height: 26px;
  color: black;
`;
