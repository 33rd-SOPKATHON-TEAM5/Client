import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <HomeBtn>
        <HomeBtnText>또 울러 가기</HomeBtnText>
      </HomeBtn>
      <ShareBtn>
        <ShareBtnText>같이 울러 가기</ShareBtnText>
      </ShareBtn>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 8rem;
  padding: 1.6rem;

  background-color: aliceblue;
`;

const HomeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 16.2rem;
  height: 100%;
  border-radius: 0.4rem;
`;

// 폰트지정
const HomeBtnText = styled.span``;

const ShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 16.2rem;
  height: 100%;
  border-radius: 0.4rem;
`;

// 폰트지정
const ShareBtnText = styled.span``;
