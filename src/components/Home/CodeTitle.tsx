import { Typography } from "antd";
import React from "react";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";
import { useMediaQuery } from "react-responsive";

interface IProps {
  text: string;
}

const CodeTitle: React.FC<IProps> = (props) => {
  const { token } = useToken();
  const { isDesktop, isTablet } = useResponsive();

  const isMatch = useMediaQuery({ minWidth: 990, maxWidth: 1200 });
  return (
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
      {props.text}
      <label
        style={{
          color: token.colorPrimary,
        }}
      >{`/>`}</label>
    </Typography>
  );
};

export default CodeTitle;
