import { Row, Typography } from "antd";
import { useToken } from "../../theme/config-theme";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";

const Experience = () => {
  const { token } = useToken();
  const { isMobile } = useResponsive();
  return (
    <div>
      <br />
      <br />
      <CodeTitle text="Experience" />
      <br />
      <div
        style={{
          width: "100%",
          borderRadius: "20px",
          borderStyle: "solid",
          borderColor: token.colorText,
          borderWidth: "1px",
          padding: "12px",
        }}
      >
        <Row
          justify={"space-between"}
          style={{
            width: "100%",
          }}
        >
          <Typography
            style={{
              fontFamily: "Yandex",
              fontWeight: "500",
              fontSize: isMobile ? "12px" : "2.4vw",
            }}
          >
            Mobile Developer
          </Typography>

          <Row style={{ gap: "12px" }}>
            <Typography
              style={{
                fontFamily: "Yandex",
                fontWeight: "500",
                fontSize: isMobile ? "12px" : "2.4vw",
              }}
            >
              2019-2021
            </Typography>
            <img
              src="/icons/zondicons_minus-outline.svg"
              style={{
                width: isMobile ? "15px" : "24px",
              }}
            />
          </Row>
        </Row>
        <hr />
        <br />
        <Row style={{ gap: isMobile ? "8px" : "24px" }}>
          <Row style={{ gap: "12px", alignItems: "center" }}>
            <img
              src="/icons/mingcute_location-line.svg"
              style={{
                width: isMobile ? "15px" : "24px",
                height: isMobile ? "15px" : "24px",
              }}
            />
            <Typography
              style={{
                fontFamily: "Gotham",
                fontWeight: "400",
                fontSize: isMobile ? "12px" : "16px",
              }}
            >
              Ashgabat,Turkmenistan
            </Typography>
          </Row>

          <Row style={{ gap: "12px", rowGap: "24px", alignItems: "center" }}>
            <img
              src="/icons/ph_link-bold.svg"
              style={{
                width: isMobile ? "15px" : "24px",
                height: isMobile ? "15px" : "24px",
              }}
            />
            <Typography
              style={{
                fontFamily: "Gotham",
                fontWeight: "400",
                fontSize: isMobile ? "12px" : "16px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Geekspace Turkmenistan
            </Typography>
          </Row>
        </Row>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Experience;
