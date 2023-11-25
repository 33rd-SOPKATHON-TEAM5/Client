import styled from 'styled-components';
import {CardImage} from '../../assets/Images/Index';

export const Container=styled.div`
  width: 100vw;
  height: 100vh;
  padding: 7.2rem 1.6rem 4.4rem 1.6rem;
  /* max-width: 475px; */
`;

export const Wrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > header{
    position: relative;
    & > img{
      position: absolute;
      top: 0;
      left: 20rem;
    }
  }

  & .title{
    color: var(--red, #DE332E);
    text-align: center;

    /* title/22_regular */
    font-family: EliceDXNeolli;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 139%; /* 30.58px */
  }

  footer{
    display: flex;
    gap: 1.9rem;

    .to-storis-btn{
      width: 16.2rem;
      height: 5rem;
      border-radius: 6px;
      background: var(--green, #008236);
      color: var(--white, #F7F7F7);
      text-align: center;

      /* body/16_bold */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export const Card=styled.div`
position: relative;
  background-image: url(${CardImage});
  background-size: contain;
  width: 343px;
  height: 423px;

  color: var(--white, #F7F7F7);
  text-align: center;
  font-family: Pretendard;
  line-height: 2.8rem;

  & > .gift-to{
    position: absolute;
    top: 16px;
    left: 28px;
font-size: 1.6rem;
font-weight: 600;

  }

  & > .gift-content{
    width: 270px;
    height: 214px;
    position: absolute;
    top: 72px;
    left: 36px;
font-size: 2rem;
font-weight: 600;
  }

  & > .gift-from{
    position: absolute;
    bottom: 16px;
    right: 30px;
font-size: 1.6rem;
font-weight: 600;
  }
`