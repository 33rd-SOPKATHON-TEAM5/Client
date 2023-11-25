import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Main from '../../pages/Main/Main';
import { styled } from "styled-components";
import MainTest from "./components/main/MainTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainTest />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  max-width: 425px;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: red;
  word-break: break-all;
`;

export default Router;
