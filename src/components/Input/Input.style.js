import styled from "styled-components";

export const Wrapper = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: 1px solid;
  width: 34.3rem;
  padding: 0 2rem;
  ${({ customStyle }) => customStyle}
`;
