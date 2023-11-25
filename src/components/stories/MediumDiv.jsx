import React from "react";
import styled from "styled-components";

import { MiddleCardImage } from "../../assets/Svgs/Index";

const MediumDiv = () => {
  return (
    <MediumContainer>
      <ContentDiv>
        <Content>
          4년만난 남자친구랑 헤어져서 울었어요ㅠㅠ 남자친구랑 진짜 정말로
          좋아했는데 그 자식이 저를 차버렸지 뭐에요....나쁜놈....
        </Content>
        <UserNickName>아이디</UserNickName>
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
  font-size: 16px;
  line-height: 19.09px;
  font-weight: 600;
  color: #f7f7f7;
`;

const UserNickName = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.36px;

  color: #f7f7f7;
`;
