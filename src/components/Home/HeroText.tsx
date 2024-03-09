import { Button, Space, Typography } from "antd";
import { useToken } from "../../theme/config-theme";

const HeroText = () => {
  const { token } = useToken();
  return (
    <Space direction="vertical" size={"large"}>
      <Typography
        style={{
          fontSize: "24px",
          fontWeight: 500,
          fontFamily: "Gotham",
          backgroundColor: token.colorPrimary,
          color: "black",
          display: "inline-block",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        Full Stack Developer
      </Typography>
      <div>
        <Typography
          style={{
            fontSize: "52px",
            fontWeight: 600,
            fontFamily: "Gotham",
          }}
        >
          Talk is <label style={{ color: token.colorPrimary }}>cheap.</label>
        </Typography>
        <Typography
          style={{
            fontSize: "52px",
            fontWeight: 600,
            fontFamily: "Gotham",
          }}
        >
          Show me the{" "}
          <label style={{ color: token.colorPrimary }}>project!</label>
        </Typography>
      </div>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: 400,
          fontFamily: "Gotham",
        }}
      >
        I code beautifully simple things, and I love what I do{" "}
      </Typography>
      <Button
        type="link"
        style={{
          padding: 0,
        }}
      >
        <Typography
          style={{
            textDecoration: "underline",
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Gotham",
            color: token.colorPrimary,
          }}
        >
          LET’S CHAT!
        </Typography>
      </Button>
    </Space>
  );
};

export default HeroText;
