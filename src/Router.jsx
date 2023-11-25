import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainTest from "./components/main/MainTest";
import OthersResult from "./pages/OthersResult/OthersResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
