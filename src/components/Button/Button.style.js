import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 0.4rem;
  padding: 2rem;
  ${({ customStyle }) => customStyle}
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  &:disabled {
    background-color: #a1a1a1;
  }
`;
