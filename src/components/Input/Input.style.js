import styled from "styled-components";

export const Wrapper = styled.textarea`
  display: flex;

  border-radius: 0.6rem;
  border: 1px solid #ececec;
  width: 34.3rem;
  padding: 1.7rem 2rem;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  input:focus {
    outline: none;
  }

  ${({ customstyle }) => customstyle}
`;

export const Error = styled.p`
  display: flex;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #5bb6e2;
  margin-top: 0.8rem;
  width: 100%;
`;
