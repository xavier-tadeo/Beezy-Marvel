import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import CardCharacter from "../components/CardCharacter/CardCharacter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<CardCharacter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
