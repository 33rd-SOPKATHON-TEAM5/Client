import { BrowserRouter, Route, Routes } from "react-router-dom";

import OthersResult from "./pages/Stories/Stories";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Main />} /> */} 
        <Route path="/stories" element={<OthersResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
