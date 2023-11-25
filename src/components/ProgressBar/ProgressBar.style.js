import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DotContainer = styled.div`
  gap: 1rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1.7rem;
`;

export const Img = styled.img`
  ${({ customStyle }) => customStyle}
`;
