import "./style/navbar.css";
import { useToken } from "../../theme/config-theme";
import { Button, Typography, Flex } from "antd";
import useResponsive from "../../hooks/useResponsive";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import MenuIcon from "../../assets/icons/Menu";
import { useTranslation } from "react-i18next";
import { lazy, Suspense, useState, useEffect } from "react";

const NavbarMenu = lazy(() => import("./NavbarMenu"));

const Navbar = () => {
  const { token } = useToken();
  const { isMobile, isTablet } = useResponsive();
  const theme = useSelector((state: RootState) => state.theme);
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <Flex
        id="navbar"
        justify="space-between"
        align="center"
        style={{
          left: 0,
          backgroundColor:
            theme.value == "dark"
              ? "rgba(32, 33, 36, 0.4)"
              : "rgba(255, 255, 255, 0.4)",
          backdropFilter: `blur(5px)`,
          zIndex: 10,
          position: 'relative',
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
          <Button 
            type="text" 
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
            }}
          >
            <MenuIcon color={token.colorText} style={{}} />
          </Button>
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
      </Flex>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <Suspense fallback={<div>Loading Mobile Menu...</div>}>
          <NavbarMenu 
            isMobileMenuOpen={isMobileMenuOpen} 
            onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
