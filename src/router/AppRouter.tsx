import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
