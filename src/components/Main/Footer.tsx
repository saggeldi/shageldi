import { Row, Typography } from "antd";
import "./style/footer.css";
import { useToken } from "../../theme/config-theme";

const Footer = () => {
  const { token } = useToken();
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

        <Row
          style={{
            alignItems: "center",
            gap: "12px",
          }}
          gutter={[12, 12]}
        >
          <Typography
            style={{
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            +993 65 55 55 55
          </Typography>

          <Typography
            style={{
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            abc673322@gmail.com
          </Typography>
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
