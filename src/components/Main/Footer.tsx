import { Row, Typography } from "antd";
import "./style/footer.css";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";

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
          <img
            src="/icons/mdi_github.svg"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
          <img
            src="/icons/mdi_instagram.svg"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
          <img
            src="/icons/mdi_linkedin.svg"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        </Row>
      </Row>
      <br />
    </div>
  );
};

export default Footer;
