import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const MainLayout = lazy(() => import("../components/Main/MainLayout"));
const Home = lazy(() => import("./Home"));
const Blogs = lazy(() => import("./Blogs"));
const BlogDetail = lazy(() => import("./BlogDetail"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
