import useResponsive from "../../hooks/useResponsive";
import { Typography, Flex } from "antd";
import { useTranslation } from "react-i18next";
import "./style/navbar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { useToken } from "../../theme/config-theme";

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

interface NavbarMenuProps {
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

const NavbarMenu = ({ isMobileMenuOpen = false, onCloseMobileMenu }: NavbarMenuProps) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme);
  const { token } = useToken();

  const handleLinkClick = () => {
    if (isMobile && onCloseMobileMenu) {
      onCloseMobileMenu();
    }
  };
  return (
    <>
      {/* Desktop/Tablet Menu */}
      {(isDesktop || isTablet) && (
        <Flex gap={16}>
          {links.map((value) => {
            return (
                value.link.includes("#") ? (
                  <a
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
                  </a>
                ) : (
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
                )
            );
          })}
        </Flex>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.value === "dark" 
              ? 'rgba(32, 33, 36, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 999,
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Close button */}
          <div 
            onClick={onCloseMobileMenu}
            className="close-button"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              fontSize: '28px',
              cursor: 'pointer',
              color: token.colorText,
              padding: '8px',
            }}
          >
            ✕
          </div>

          {/* Mobile Menu Items */}
          {links.map((value) => {
            return value.link.includes("#") ? (
              <a
                href={value.link}
                key={`mobile-navbar-button-${value.key}`}
                style={{ 
                  textDecoration: 'none',
                  width: '100%',
                  textAlign: 'center',
                }}
                onClick={handleLinkClick}
              >
                <Typography
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    fontFamily: "Yandex",
                    cursor: "pointer",
                    padding: "16px",
                    color: token.colorText,
                    transition: 'color 0.2s ease',
                  }}
                  className="mobile-menu-item"
                >
                  {t(`navbar.menu.${value.key}`)}
                </Typography>
              </a>
            ) : (
              <Link
                to={value.link}
                style={{ 
                  textDecoration: 'none',
                  width: '100%',
                  textAlign: 'center',
                }}
                key={`mobile-navbar-button-${value.key}`}
                onClick={handleLinkClick}
              >
                <Typography
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    fontFamily: "Yandex",
                    cursor: "pointer",
                    padding: "16px",
                    color: token.colorText,
                    transition: 'color 0.2s ease',
                  }}
                  className="mobile-menu-item"
                >
                  {t(`navbar.menu.${value.key}`)}
                </Typography>
              </Link>
            );
          })}

          {/* Contact Button for Mobile */}
          <div style={{
            marginTop: '32px',
            padding: '16px 32px',
            borderRadius: '12px',
            backgroundColor: token.colorPrimary,
            cursor: 'pointer',
          }}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "Yandex",
                color: 'white',
              }}
            >
              {t('navbar.contact')}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMenu;
