import { Typography } from "antd";
import { useToken } from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";

const CodeView = (props: { code: string }) => {
  const { token } = useToken();
  const { isDesktop, isMobile } = useResponsive();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: isDesktop ? "22px" : "2px",
        overflow: "auto",
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
      <div>
        {props.code.split("\n").map((val: string, index: number) => {
          return (
            <Typography
              key={`code-value-${index}`}
              style={{
                fontFamily: "Gotham",
                fontSize: isMobile ? "7px" : "16px",
                fontWeight: val.includes("<mine>") ? 500 : 400,
                color: val.includes("<mine>") ? token.colorPrimary : "",
              }}
            >
              {val.replace("<mine>", "")}
            </Typography>
          );
        })}
      </div>
    </div>
  );
};

export default CodeView;
