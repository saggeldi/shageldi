import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./style/layout.css";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <Container fixed>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
