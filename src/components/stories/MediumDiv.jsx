import React from 'react';
import styled from 'styled-components';

import { MiddleCardImage } from '../../assets/Svgs/Index';

const MediumDiv = (props) => {
  const {userName, cryReason} = props;
  return (
    <MediumContainer>
      <ContentDiv>
        <Content>
          {cryReason}
        </Content>
        <UserNickName>{userName}</UserNickName>
      </ContentDiv>
    </MediumContainer>
  );
};

export default MediumDiv;

const MediumContainer = styled.article`
  width: 100%;
  height: 14.4rem;
  padding: 2.8rem 2.4rem;
  border-radius: 0.6rem;
  background-image: url(${MiddleCardImage});
`;

const ContentDiv = styled.div`
  position: relative;
  height: 8.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Content = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  line-height: 19.09px;
  font-weight: 600;
  color: #f7f7f7;
  text-align:center;
`;

const UserNickName = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.36px;
  color: #f7f7f7;
`;
