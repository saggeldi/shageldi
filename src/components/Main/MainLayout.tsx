import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./style/layout.css";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { toggleTheme } from "../../features/themeSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useToken } from "../../theme/config-theme";

const MainLayout = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const { token } = useToken();

  const toggleThemeHandler = () => {
    dispatch(
      toggleTheme(
        theme.value === "dark"
          ? {
              value: "light",
            }
          : {
              value: "dark",
            }
      )
    );
  };
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${token.colorBgBase}, ${token.colorBgLayout})`,
      }}
    >
      <Container fixed>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 40,
          borderRadius: "50%",
          backgroundColor: token.colorBgLayout,
          boxShadow: `rgba(17, 12, 46, 0.15) 0px 48px 100px 0px`,
          padding: "6px",
          borderStyle: "solid",
          width: "60px",
          height: "60px",
        }}
      >
        <DarkModeSwitch
          style={{ marginBottom: "2rem", marginLeft: "6px", marginTop: "4px" }}
          checked={theme.value == "dark"}
          onChange={toggleThemeHandler}
          size={30}
        />
      </div>
    </div>
  );
};

export default MainLayout;
