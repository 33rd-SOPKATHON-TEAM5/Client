import React from 'react';
import styled from 'styled-components';

const MediumDiv = () => {
  return (
    <Medium>
      4년만난 남자친구랑 헤어져서 울었어요ㅠㅠ 남자친구랑 진짜 정말로 좋아했는데 그 자식이 저를 차버렸지
      뭐에요....나쁜놈....
    </Medium>
  );
};

export default MediumDiv;

const Medium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.4rem;
  height: 14.4rem;
  border-radius: 0.6rem;
  background-color: red;
`;
