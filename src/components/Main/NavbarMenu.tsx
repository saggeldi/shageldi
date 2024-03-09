import useResponsive from "../../hooks/useResponsive";
import { Stack } from "@mui/material";
import { Typography } from "antd";

const links = [
  {
    text: "Home",
    link: "#",
  },
  {
    text: "About me",
    link: "#",
  },
  {
    text: "Skills",
    link: "#",
  },
  {
    text: "Works",
    link: "#",
  },
  {
    text: "Experience",
    link: "#",
  },
];

const NavbarMenu = () => {
  const { isDesktop, isTablet } = useResponsive();
  return (
    <div>
      {isDesktop || isTablet ? (
        <Stack direction={"row"} spacing={2}>
          {links.map((value) => {
            return (
              <Typography
                key={`navbar-button-${value.text}`}
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  fontFamily: "Yandex",
                  cursor: "pointer",
                  padding: "12px",
                }}
              >
                {value.text}
              </Typography>
            );
          })}
        </Stack>
      ) : null}
    </div>
  );
};

export default NavbarMenu;
