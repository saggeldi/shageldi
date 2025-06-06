import useResponsive from "../../hooks/useResponsive";
import { Typography, Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style/navbar.css"
import {Link} from "react-router-dom";

const links = [
  {
    key: "home",
    link: "/#hero",
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
        <Flex gap={16}>
          {links.map((value) => {
            return (
                value.link.includes("#")?<a
                    href={value.link}
                    key={`navbar-button-${value.key}`}
                    style={{ textDecoration: 'none' }}
                    className={"site-navbar-button"}
                >
                  <Typography
                      className={"site-navbar-button-text"}
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
                </a>: <Link
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
        </Flex>
      ) : null}
    </div>
  );
};

export default NavbarMenu;
