import useResponsive from "../../hooks/useResponsive";
import { Stack } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const links = [
  {
    key: "home",
    link: "/",
  },
  {
    key: "aboutMe",
    link: "/#about",
  },
  {
    key: "skills",
    link: "/#skills",
  },
  {
    key: "works",
    link: "/#works",
  },
  {
    key: "experience",
    link: "/#experience",
  },
  {
    key: "blogs",
    link: "/blogs",
  },
];

const NavbarMenu = () => {
  const { isDesktop, isTablet } = useResponsive();
  const { t } = useTranslation();
  return (
    <div>
      {isDesktop || isTablet ? (
        <Stack direction={"row"} spacing={2}>
          {links.map((value) => {
            return (
              <Link 
                to={value.link} 
                style={{ textDecoration: 'none' }}
                key={`navbar-button-${value.key}`}
              >
                <Typography
                  style={{
                    fontSize: isTablet ? "14px" : "18px",
                    fontWeight: 500,
                    fontFamily: "Yandex",
                    cursor: "pointer",
                    padding: "12px",
                  }}
                >
                  {t(`navbar.menu.${value.key}`)}
                </Typography>
              </Link>
            );
          })}
        </Stack>
      ) : null}
    </div>
  );
};

export default NavbarMenu;
