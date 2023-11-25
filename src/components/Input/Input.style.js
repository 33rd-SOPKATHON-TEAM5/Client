import styled from "styled-components";

export const Wrapper = styled.input`
  display: flex;

  border-radius: 0.6rem;
  border: 1px solid #ececec;
  width: 34.3rem;
  padding: 0 2rem;
  input:focus {
    outline: none;
  }
  ${({ customStyle }) => customStyle}
`;
