import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import NickName from "./pages/Onboarding/NickName";
import SadContent from "./pages/Onboarding/SadContent";
import CardPage from "./pages/CardPage/CardPage";
import OthersResult from "./pages/Stories/Stories";


const Router = () => {
  return (
    // <Wrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/onboarding/nickname" element={<NickName />} />
        <Route path="/onboarding/content" element={<SadContent />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/stories" element={<OthersResult />} />
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
