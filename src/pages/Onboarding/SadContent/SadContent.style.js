import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 1.6rem;
  background-color: #008236;
`;

export const Img = styled.img`
  display: flex;
  margin-left: 1rem;
`;

export const Icon = styled.img`
  display: flex;
  position: relative;
  bottom: 6rem;
  right: 12.3rem;
  z-index: 1;
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

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 3.3rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: #fff;
`;
