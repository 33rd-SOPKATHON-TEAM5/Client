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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.p`
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  text-align: center;
  font-family: TSCHotplaceGothicOTF;
`;

export const StartImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 100%;
  height: 40rem;
  margin-top: 5rem;
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
