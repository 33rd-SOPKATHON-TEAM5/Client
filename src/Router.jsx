import { BrowserRouter, Route, Routes } from "react-router-dom";


import CardPage from "./pages/CardPage/CardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
