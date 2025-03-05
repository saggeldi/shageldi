import { Typography } from "antd";
import useResponsive from "../../hooks/useResponsive";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const CodeView = (props: {
  code: string;
  color: string;
  style: React.CSSProperties | undefined;
}) => {
  const { isDesktop, isMobile } = useResponsive();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: isDesktop ? "22px" : "2px",
        overflow: "auto",
        ...props.style,
      }}
    >
      <div>
        {props.code.split("\n").map((_: string, index: number) => {
          return (
            <Typography
              key={`code-line-${index}`}
              style={{
                width: isMobile ? "11px" : "30px",
                fontFamily: "Gotham",
                fontSize: isMobile ? "7px" : "16px",
                fontWeight: 400,
              }}
            >
              {index + 1}
            </Typography>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "0px",
        }}
      >
        <TypeAnimation
          style={{
            fontFamily: "Gotham",
            fontSize: isMobile ? "7px" : "16px",
            fontWeight: 400,
            color: props.color,
            whiteSpace: "pre-line",
          }}
          sequence={[props.code, 10]}
          speed={90}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default CodeView;
