import { styled } from "styled-components";

const MainTest = () => {
  return (
    <Wrapper>
      <Text>
        MainTestdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Text = styled.div`
  width: 50%;
`;

export default MainTest;
