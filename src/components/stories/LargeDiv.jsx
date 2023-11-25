import React from 'react';
import styled from 'styled-components';

import { BigCardImage } from '../../assets/Svgs';

const LargeDiv = () => {
  return (
    <LargeContainer>
      <ContentDiv>
        <Content>
          가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
        </Content>
        <UserNickName>아이디</UserNickName>
      </ContentDiv>
    </LargeContainer>
  );
};

export default LargeDiv;

const LargeContainer = styled.article`
  width: 100%;
  height: 18.1rem;
  padding: 2.8rem 2.4rem;
  border-radius: 0.6rem;
  background-image: url(${BigCardImage});
`;

const ContentDiv = styled.div`
  position: relative;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div``;

const UserNickName = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
