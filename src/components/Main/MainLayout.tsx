import { Outlet } from "react-router-dom";
import "./style/layout.css";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { toggleTheme } from "../../features/themeSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useToken } from "../../theme/config-theme";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

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
          minHeight: "100vh",
      }}
    >
      <Layout.Content
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar />
        </Suspense>
        <div
          style={{
            paddingTop: "80px",
          }}
        >
          <Outlet />
        </div>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </Layout.Content>
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
          style={{
            marginBottom: "2rem",
            marginLeft: "6px",
            marginTop: "4px",
            borderColor: "red",
          }}
          checked={theme.value == "dark"}
          onChange={toggleThemeHandler}
          size={30}
        />
      </div>
    </div>
  );
};

export default MainLayout;
