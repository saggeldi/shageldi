import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
