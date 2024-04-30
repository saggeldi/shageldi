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
  const { isDesktop } = useResponsive();

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
          <br />
          <img
            src="/logo.png"
            style={{
              width: "90%",
              maxHeight: "100%",
              minHeight: "45%",
              backgroundColor: `rgb(18,255,247)`,
              background: `linear-gradient(180deg, rgba(18,255,247,0) 0%, rgba(179,255,171,1) 100%)`,
              objectFit: "cover",
              borderRadius: "100%",
              borderColor: "#B3FFAB",
              borderStyle: "solid",
              borderWidth: "3px",
            }}
          />
          <div
            style={{
              width: "95%",
              backgroundColor: `rgb(18,255,247)`,
              background: `linear-gradient(266deg, rgba(18,255,247,0) 0%, rgba(105,255,206,0.40798326166404064) 94%, rgba(179,255,171,0.5788516090029762) 100%)`,
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
                fontSize: "24px",
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
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <img
                src="/icons/mdi_instagram.svg"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <img
                src="/icons/mdi_linkedin.svg"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <img
                src="/icons/ic_baseline-phone.svg"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <img
                src="/icons/mdi_gmail.svg"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
            </Row>
          </div>
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
