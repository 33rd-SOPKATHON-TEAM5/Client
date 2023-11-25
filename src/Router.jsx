import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainTest from "./components/main/MainTest";

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
