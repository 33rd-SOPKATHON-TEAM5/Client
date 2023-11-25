import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import CardPage from "./pages/CardPage/CardPage";

const Router = () => {
  return (
    // <Wrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
    // </Wrapper>
  );
};

// const Wrapper=styled.div`
//   display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
  
// `

export default Router;
