import "./style/navbar.css";
import { useToken } from "../../theme/config-theme";
import { Button, Typography } from "antd";
import { Stack } from "@mui/material";
import NavbarMenu from "./NavbarMenu";
import useResponsive from "../../hooks/useResponsive";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const Navbar = () => {
  const { token } = useToken();
  const { isMobile } = useResponsive();
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <Stack
      id="navbar"
      justifyContent={"space-between"}
      direction={"row"}
      style={{
        left: 0,
        paddingLeft: "4%",
        paddingRight: "4%",
        position: "fixed",
        top: 0,
        backgroundColor:
          theme.value == "dark"
            ? "rgba(32, 33, 36, 0.4)"
            : "rgba(255, 255, 255, 0.4)",
        backdropFilter: `blur(5px)`,
        zIndex: 10,
      }}
    >
      <Typography id="logo-text">
        <label
          style={{
            color: token.colorPrimary,
            fontWeight: 700,
          }}
        >
          Name
        </label>{" "}
        Surname
      </Typography>
      <NavbarMenu />
      {isMobile ? (
        <img src="/icons/menu.svg" />
      ) : (
        <Button type="link">
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "Yandex",
              color: token.colorPrimary,
            }}
          >
            Contact
          </Typography>
        </Button>
      )}
    </Stack>
  );
};

export default Navbar;
