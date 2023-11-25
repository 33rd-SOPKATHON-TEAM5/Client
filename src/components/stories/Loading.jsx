import React from 'react';
import styled from 'styled-components';

import {LoadingCryingSanta} from "../../assets/Images/Index"

const Loading = () => {
  return (
    <Div>
        <Img src={LoadingCryingSanta} alt="로딩 이미지" />
    </Div>
  )
}

export default Loading;

const Div = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items:center;
`

const Img = styled.img`

`