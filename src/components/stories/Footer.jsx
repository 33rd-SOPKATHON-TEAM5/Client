import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [linkBtnContext, setLinkBtnContext] = useState('울보산타 알려주기');

  const handleCopyClipBoard = async (e, text) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setLinkBtnContext('링크 복사 완료!');
    } catch (err) {
      console.log(err.message);
    }
  };

  const onClickMoveHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <FooterContainer>
      <HomeBtn>
        <HomeBtnText onClick={(e) => handleCopyClipBoard(e, 'url')}>{linkBtnContext}</HomeBtnText>
      </HomeBtn>
      <ShareBtn>
        <ShareBtnText onClick={onClickMoveHome}>울보산타 다시 만나기</ShareBtnText>
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
  margin-top: 1.4rem;
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
  color: #f7f7f7;
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
  color: #f7f7f7;
  font-weight: 700;
`;
