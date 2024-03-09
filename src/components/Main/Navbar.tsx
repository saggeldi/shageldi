import "./style/navbar.css";
import { useToken } from "../../theme/config-theme";
import { Button, Typography } from "antd";
import { Stack } from "@mui/material";
import NavbarMenu from "./NavbarMenu";
import useResponsive from "../../hooks/useResponsive";

const Navbar = () => {
  const { token } = useToken();
  const { isMobile } = useResponsive();
  return (
    <Stack id="navbar" justifyContent={"space-between"} direction={"row"}>
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
