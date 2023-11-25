import { BrowserRouter, Route, Routes } from "react-router-dom";

import Start from "./pages/Start";
import NickName from "./pages/Onboarding/NickName";
import SadContent from "./pages/Onboarding/SadContent";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/onboarding/nickname" element={<NickName />} />
        <Route path="/onboarding/content" element={<SadContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
