import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <HomeBtn>
        <HomeBtnText>울보산타 알려주기</HomeBtnText>
      </HomeBtn>
      <ShareBtn>
        <ShareBtnText>울보산타 다시만나기</ShareBtnText>
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

`;

const HomeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5bb6e2;
  width: 16.2rem;
  height: 100%;
  border-radius: 0.4rem;
`;

// 폰트지정
const HomeBtnText = styled.span`
  font-size: 16px;
  color: #F7F7F7;
  font-weight: 700;
`;

const ShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #008236;
  width: 16.2rem;
  height: 100%;
  border-radius: 0.4rem;
`;

// 폰트지정
const ShareBtnText = styled.span`
  font-size: 16px;
  color: #F7F7F7;
  font-weight: 700;
`;
