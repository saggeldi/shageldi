import { Typography } from "antd";
import React from "react";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";
import { useMediaQuery } from "react-responsive";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  text: string;
}

const CodeTitle: React.FC<IProps> = (props) => {
  const { token } = useToken();
  const { isDesktop, isTablet } = useResponsive();

  const isMatch = useMediaQuery({ minWidth: 990, maxWidth: 1200 });
  return (
    <ScrollAnimation animateIn="bounceIn">
      <Typography
        style={{
          fontSize: isMatch
            ? "35px"
            : isDesktop
            ? "48px"
            : isTablet
            ? "30px"
            : "24px",
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
        {props.text}
        <label
          style={{
            color: token.colorPrimary,
          }}
        >{`/>`}</label>
      </Typography>
    </ScrollAnimation>
  );
};

export default CodeTitle;
