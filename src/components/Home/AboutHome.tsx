import { Col, Row, Typography } from "antd";
import useResponsive from "../../hooks/useResponsive";
import CodeView from "./CodeView";
import CodeTitle from "./CodeTitle";

const code = `<!DOCTYPE html>
<html>
      <head>
          <mine><title>About me</title>
      </head>
      <body>
           <mine><h1>Shageldi Alyyev</h1>
           <img url="Picture.1"/>
        <textarea>
        <mine>Results-driven Full Stack Developer with expertise 
        <mine>in building robust and scalable applications across 
        <mine>various technology stacks. 
        <mine>Proficient in front-end and back-end development, 
        <mine>I bring a strong skill set in Java, Android XML, 
        <mine>Kotlin, Jetpack Compose, ReactJS, Typescript, NestJS, Express JS,
        <mine>PostgreSQL, ELK Stack, 
        <mine>Adonis JS, TypeORM, MySQL, MUI, Ant Design, and Web Scraping. Passionate about 
        <mine>reating efficient, user-friendly solutions that meet 
        <mine>and exceed client expectations.
           </textarea>
       </body>
</html>`;

const AboutHome = () => {
  const { isDesktop, isMobile } = useResponsive();

  const About = () => {
    const size = isMobile ? "20px" : "40px";
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <img
          src="/logo.png"
          style={{
            width: isMobile ? "60%" : "90%",
            maxHeight: "100%",
            minHeight: "45%",
            background: `linear-gradient(0deg, rgba(179, 255, 171, 0.35) 0%, rgba(18, 255, 247, 0) 100%)`,
            objectFit: "cover",
            borderRadius: "100%",
            borderColor: "#B3FFAB",
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
            borderColor: "#B3FFAB",
            borderStyle: "solid",
            borderWidth: "3px",
            backdropFilter: `blur(5px)`,
          }}
        >
          <Typography
            style={{
              fontFamily: "Yandex",
              fontWeight: "700",
              fontSize: isMobile ? "14px" : "2vw",
              width: "100%",
              textAlign: "center",
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
            <img
              src="/icons/mdi_github.svg"
              style={{ width: size, height: size, cursor: "pointer" }}
            />
            <img
              src="/icons/mdi_instagram.svg"
              style={{ width: size, height: size, cursor: "pointer" }}
            />
            <img
              src="/icons/mdi_linkedin.svg"
              style={{ width: size, height: size, cursor: "pointer" }}
            />
            <img
              src="/icons/ic_baseline-phone.svg"
              style={{ width: size, height: size, cursor: "pointer" }}
            />
            <img
              src="/icons/mdi_gmail.svg"
              style={{ width: size, height: size, cursor: "pointer" }}
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
          marginLeft: "83px",
          marginRight: "113px",
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
          <CodeView code={code} />
        </Col>
        <Col xs={8}>
          <About />
        </Col>
      </Row>
    );
  };

  return (
    <div
      style={{
        paddingBottom: "22px",
        marginTop: isDesktop ? "0px" : "60px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          paddingTop: "8px",
        }}
      >
        <CodeTitle text="About me" />
        {isDesktop ? (
          <AboutPicture />
        ) : (
          <div
            style={{
              padding: "16px",
              paddingLeft: "68px",
              paddingRight: "58px",
            }}
          >
            <CodeView code={code} />
            <About />
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutHome;
