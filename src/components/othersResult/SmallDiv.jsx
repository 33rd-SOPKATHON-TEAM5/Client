import React from 'react';
import styled from 'styled-components';

const SmallDiv = () => {
  return <Small>4년만난 남자친구랑 헤어져서 울었어요ㅠㅠㅠ</Small>;
};

export default SmallDiv;

const Small = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.4rem;
  height: 10.6rem;
  border-radius: 0.6rem;
  background-color: red;
`;
