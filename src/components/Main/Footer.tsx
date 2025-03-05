import { Row, Typography } from "antd";
import "./style/footer.css";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";
import Github from "../../assets/icons/Github";
import Instagram from "../../assets/icons/Instagram";
import Linkedin from "../../assets/icons/Linkedin";

const Footer = () => {
  const { token } = useToken();
  const { isMobile, isTablet } = useResponsive();
  return (
    <div>
      <br />
      <hr />
      <br />
      <Row
        style={{
          width: "100%",
          alignItems: "center",
        }}
        justify={"space-between"}
      >
        <Typography
          id="logo-text"
          style={{
            fontFamily: "Yandex",
            fontSize: isMobile ? "12px" : "1.5vw",
          }}
        >
          <label
            style={{
              color: token.colorPrimary,
              fontWeight: 700,
            }}
          >
            Shageldi
          </label>{" "}
          Alyyev
        </Typography>

        <Row
          style={{
            alignItems: "center",
            gap: "12px",
          }}
          gutter={[12, 12]}
        >
          {isMobile || isTablet ? null : (
            <Typography
              style={{
                fontFamily: "Gotham",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              +993 61 29 87 82
            </Typography>
          )}

          {isMobile || isTablet ? null : (
            <Typography
              style={{
                fontFamily: "Gotham",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              multiplatform00@gmail.com
            </Typography>
          )}
          <Github
            color={token.colorText}
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
          <Instagram
            color={token.colorText}
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
          <Linkedin
            color={token.colorText}
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        </Row>
      </Row>
      <br />
    </div>
  );
};

export default Footer;
