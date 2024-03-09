import { Col, Row, Typography } from "antd";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";
import { useMediaQuery } from "react-responsive";

const AboutHome = () => {
  const { token } = useToken();
  const { isDesktop, isTablet } = useResponsive();

  const isMatch = useMediaQuery({ minWidth: 990, maxWidth: 1200 });

  const AboutPicture = () => {
    return (
      <Row
        style={{
          marginLeft: "83px",
          marginRight: "113px",
          padding: 0,
        }}
      >
        <Col xs={16}></Col>
        <Col xs={8}></Col>
      </Row>
    );
  };

  return (
    <div
      style={{
        paddingBottom: "22px",
        marginTop: isDesktop ? "0px" : "60px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(/images/${
            isDesktop ? "light_bg.svg" : "mobile_light.svg"
          })`,
          width: "100%",
          height: "60vh",
          paddingTop: "8px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
        }}
      >
        <Typography
          style={{
            fontSize: isMatch
              ? "35px"
              : isDesktop
              ? "48px"
              : isTablet
              ? "30px"
              : "4vw",
            marginTop: isDesktop ? "0px" : isTablet ? "-22px" : "-12px",
            fontWeight: 700,
            fontFamily: "Yandex",
            textAlign: "center",
          }}
        >
          <label
            style={{
              color: token.colorPrimary,
            }}
          >{`<`}</label>
          {`About me `}
          <label
            style={{
              color: token.colorPrimary,
            }}
          >{`/>`}</label>
        </Typography>
        {isDesktop ? <AboutPicture /> : null}
      </div>
    </div>
  );
};

export default AboutHome;
