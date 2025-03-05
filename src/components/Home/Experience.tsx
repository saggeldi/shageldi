import { Collapse, CollapseProps, Row, Typography } from "antd";
import { useToken } from "../../theme/config-theme";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import Link from "../../assets/icons/Link";
import Location from "../../assets/icons/Location";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  const { token } = useToken();
  const { isMobile } = useResponsive();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      style: {
        width: "100%",
        borderRadius: "20px",
        borderStyle: "solid",
        borderColor: token.colorText,
        borderWidth: "1px",
        padding: "12px",
      },
      label: (
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
          </Row>
        </Row>
      ),
      children: (
        <Row style={{ gap: isMobile ? "8px" : "24px" }}>
          <Row style={{ gap: "12px", alignItems: "center" }}>
            <Location
              color={token.colorText}
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
            <Link
              color={token.colorText}
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
      ),
    },
  ];
  return (
    <div>
      <CodeTitle text="Experience" />
      <br />

      <ScrollAnimation animateIn="fadeIn">
        <Collapse
          items={items}
          expandIconPosition="end"
          expandIcon={(props) =>
            props.isActive ? (
              <img
                src="/icons/zondicons_minus-outline.svg"
                style={{
                  width: isMobile ? "15px" : "24px",
                }}
              />
            ) : (
              <img
                src="/icons/zondicons_add-outline.svg"
                style={{
                  width: isMobile ? "15px" : "24px",
                }}
              />
            )
          }
          defaultActiveKey={["1"]}
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </ScrollAnimation>
    </div>
  );
};

export default Experience;
