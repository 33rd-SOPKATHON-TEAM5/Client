import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #db1820;
`;

export const TextContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 11rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
`;

export const Text = styled.p`
  display: flex;
  font-size: 16px;
  display: relative;
  bottom: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  text-align: center;
  font-family: EliceDXNeolliOTF;
`;

export const StartImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  width: 100vw;
`;
