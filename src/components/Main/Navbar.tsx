import "./style/navbar.css";
import { useToken } from "../../theme/config-theme";
import { Button, Typography } from "antd";
import { Stack } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import MenuIcon from "../../assets/icons/Menu";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";

const NavbarMenu = lazy(() => import("./NavbarMenu"));

const Navbar = () => {
  const { token } = useToken();
  const { isMobile, isTablet } = useResponsive();
  const theme = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  return (
    <Stack
      id="navbar"
      justifyContent={"space-between"}
      direction={"row"}
      alignItems={"center"}
      style={{
        left: 0,
        // paddingLeft: "4%",
        // paddingRight: "4%",
        // position: "fixed",
        // top: 0,
        backgroundColor:
          theme.value == "dark"
            ? "rgba(32, 33, 36, 0.4)"
            : "rgba(255, 255, 255, 0.4)",
        backdropFilter: `blur(5px)`,
        zIndex: 10,
      }}
    >
      <Typography
        id="logo-text"
        style={{
          fontFamily: "Yandex",
          fontSize: isMobile ? "12px" : "24px",
        }}
      >
        <label
          style={{
            color: token.colorPrimary,
            fontWeight: 700,
          }}
        >
          {t('navbar.name')}
        </label>{" "}
        {t('navbar.surname')}
      </Typography>
      <Suspense fallback={<div>Loading Menu...</div>}>
        <NavbarMenu />
      </Suspense>
      {isMobile ? (
        <MenuIcon color={token.colorText} style={{}} />
      ) : (
        <Button type="link">
          <Typography
            style={{
              fontSize: isTablet ? "18px" : "24px",
              fontWeight: 700,
              fontFamily: "Yandex",
              color: token.colorPrimary,
            }}
          >
            {t('navbar.contact')}
          </Typography>
        </Button>
      )}
    </Stack>
  );
};

export default Navbar;
