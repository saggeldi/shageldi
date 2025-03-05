import {Button, Space, Typography} from "antd";
import {useToken} from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";

const HeroText = () => {
    const {token} = useToken();
    const {isMobile} = useResponsive();

    return (
        <Space direction="vertical" size={"large"}>
            <Typography
                style={{
                    fontSize: isMobile ? "12px" : "1.8vw",
                    fontWeight: 500,
                    fontFamily: "Gotham",
                    backgroundColor: token.colorPrimary,
                    color: "black",
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                Mobile Developer
            </Typography>
            <div>
                <Typography
                    style={{
                        fontSize: isMobile ? "24px" : "2.2vw",
                        fontWeight: 600,
                        fontFamily: "Gotham",
                    }}
                >
                    Talk is <label style={{color: token.colorPrimary}}>cheap.</label>
                </Typography>
                <Typography
                    style={{
                        fontSize: isMobile ? "24px" : "2.2vw",
                        fontWeight: 600,
                        fontFamily: "Gotham",
                    }}
                >
                    Show me the{" "}
                    <label style={{color: token.colorPrimary}}>project!</label>
                </Typography>
            </div>
            <Typography
                style={{
                    fontSize: isMobile ? "12px" : "1.0vw",
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
                    onClick={() => {
                        window.open("https://medium.com/@multiplatform00")
                    }}
                    style={{
                        textDecoration: "underline",
                        fontSize: isMobile ? "12px" : "1.3vw",
                        fontWeight: 500,
                        fontFamily: "Gotham",
                        color: token.colorPrimary,
                    }}
                >
                    READ BLOGS
                </Typography>
            </Button>
        </Space>
    );
};

export default HeroText;
