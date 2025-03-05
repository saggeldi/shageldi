import {Col, Row, Space, Typography} from "antd";
import useResponsive from "../../hooks/useResponsive";
import CodeView from "./CodeView";
import CodeTitle from "./CodeTitle";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";
import Github from "../../assets/icons/Github";
import Instagram from "../../assets/icons/Instagram";
import Linkedin from "../../assets/icons/Linkedin";
import Phone from "../../assets/icons/Phone";
import Gmail from "../../assets/icons/Gmail";

const code = `<!DOCTYPE html>
<html>
      <head>
          <title>About me</title>
      </head>
      <body>
           <h1>Shageldi Alyyev</h1>
           <img url="Picture.1"/>
        <textarea>  
        Results-driven Android Developer with expertise  
        in building robust and scalable mobile applications.  
        Proficient in modern Android development,  
        I bring a strong skill set in Kotlin, Jetpack Compose,  
        Android XML, Coroutines, Ktor, Room,  
        Firebase, Retrofit, WorkManager, and Compose Multiplatform.  
        Experienced in designing intuitive UI/UX and optimizing  
        performance for seamless mobile experiences. Passionate about  
        creating efficient, user-friendly solutions that meet  
        and exceed user expectations.
        </textarea>
       </body>
</html>`;

const AboutHome = () => {
    const {isDesktop, isMobile} = useResponsive();

    const theme = useSelector((state: RootState) => state.theme);

    const color =
        theme.value == "light" ? "rgba(30, 73, 97, 1)" : "rgba(35, 140, 199, 1)";
    const textColor =
        theme.value == "light" ? "rgba(255, 215, 0, 1)" : "rgba(32, 33, 36, 1)";
    const codeColor =
        theme.value == "light" ? "rgba(34, 54, 231, 1)" : "rgba(255, 215, 0, 1)";
    const bgColor =
        theme.value == "light"
            ? "rgba(18, 255, 247, 0.15)"
            : "rgba(18, 255, 247, 0.15)";
    const About = () => {
        const size = isMobile ? "20px" : "40px";
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: color,
                    borderTopRightRadius: isMobile ? "0px" : "20px",
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: isMobile ? "20px" : "0px",
                }}
            >
                <br/>
                <img
                    src="/logo.png"
                    style={{
                        width: isMobile ? "60%" : "90%",
                        maxHeight: "100%",
                        minHeight: "45%",
                        background: `linear-gradient(0deg, rgba(179, 255, 171, 0.35) 0%, rgba(18, 255, 247, 0) 100%)`,
                        objectFit: "cover",
                        borderRadius: "100%",
                        borderColor: "rgba(179, 255, 171, 1)",
                        borderStyle: "solid",
                        borderWidth: "3px",
                    }}
                />
                <div
                    style={{
                        marginTop: "-30px",
                        width: isMobile ? "65%" : "95%",
                        background: `linear-gradient(95.14deg, rgba(179, 255, 171, 0.35) 1.06%, rgba(18, 255, 247, 0) 100%)`,
                        objectFit: "cover",
                        borderRadius: "20px",
                        borderColor: "rgba(179, 255, 171, 1)",
                        borderStyle: "solid",
                        borderWidth: "3px",
                        backdropFilter: `blur(5px)`,
                    }}
                >
                    <Typography
                        style={{
                            fontFamily: "Yandex",
                            fontWeight: "700",
                            fontSize: isMobile ? "14px" : "1.6vw",
                            width: "100%",
                            textAlign: "center",
                            color: textColor,
                        }}
                    >
                        Shageldi Alyyev
                    </Typography>
                    <Row
                        align={"stretch"}
                        justify={"center"}
                        style={{
                            gap: "6px",
                        }}
                    >
                        <Github
                            color={textColor}
                            style={{width: size, height: size, cursor: "pointer"}}
                        />
                        <Instagram
                            color={textColor}
                            style={{width: size, height: size, cursor: "pointer"}}
                        />
                        <Linkedin
                            color={textColor}
                            style={{width: size, height: size, cursor: "pointer"}}
                        />
                        <Phone
                            color={textColor}
                            style={{width: size, height: size, cursor: "pointer"}}
                        />
                        <Gmail
                            color={textColor}
                            style={{width: size, height: size, cursor: "pointer"}}
                        />
                    </Row>
                </div>
            </div>
        );
    };

    const AboutPicture = () => {
        return (
            <Row
                style={{
                    width: "100%",
                    padding: 0,
                    overflow: "auto",
                }}
            >
                <Col
                    xs={16}
                    style={{
                        padding: "16px",
                        paddingLeft: "28px",
                    }}
                >
                    <CodeView code={code} color={codeColor} style={{}}/>
                </Col>
                <Col xs={8}>
                    <About/>
                </Col>
            </Row>
        );
    };

    return (
        <Space
            size={"large"}
            direction="vertical"
            style={{
                paddingBottom: "22px",
                marginTop: isDesktop ? "0px" : "60px",
                overflow: "hidden",
            }}
        >
            <CodeTitle text="About me"/>
            <div
                style={{
                    backgroundColor: bgColor,
                    borderRadius: "30px",
                    borderStyle: "solid",
                    borderWidth: "4px",
                    borderColor: color,
                    width: "100%",
                }}
            >
                {isDesktop ? (
                    <AboutPicture/>
                ) : (
                    <div>
                        <CodeView
                            code={code}
                            color={codeColor}
                            style={{
                                padding: "16px",
                            }}
                        />
                        <About/>
                    </div>
                )}
            </div>
        </Space>
    );
};

export default AboutHome;
