import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

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

  width: 80%;
`;

export const Text = styled.p`
  display: flex;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.9rem;
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
