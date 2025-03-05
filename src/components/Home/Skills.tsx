import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import { Tilt } from "react-tilt";
import { defaultOptions } from "./Advantages";
import ScrollAnimation from "react-animate-on-scroll";

const imagesArray = [
  "adonisjs.svg",
  "expressjs.svg",
  "mui.svg",
  "nginx.svg",
  "reactjs.svg",
  "ant-design.svg",
  "java.svg",
  "mysql.svg",
  "pm2.svg",
  "typescript.svg",
  "docker.svg",
  "kotlin.svg",
  "nestjs.svg",
  "postgresql.svg",
  "ubuntu.svg",
];

const Skills = () => {
  const { isMobile } = useResponsive();
  return (
    <div>
      <CodeTitle text="Skills" />
      <br />
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12}>
          <Typography
            style={{
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: isMobile ? "14px" : "2.4vw",
            }}
          >
            Skills I possess as a specialist
          </Typography>
          <br />
          <br />
          <ul
            style={{
              marginLeft: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <li>
              <Typography
                style={{
                  fontFamily: "Gotham",
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "1.6vw",
                }}
              >
                Front-end
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  fontFamily: "Gotham",
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "1.6vw",
                }}
              >
                Back-end
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  fontFamily: "Gotham",
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "1.6vw",
                }}
              >
                Working with servers
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  fontFamily: "Gotham",
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "1.6vw",
                }}
              >
                Database development
              </Typography>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row style={{ rowGap: "22px" }}>
            {imagesArray.map((icon, index) => {
              return (
                <Col xs={6} sm={6} md={6} key={`icon-${index}`}>
                  <ScrollAnimation animateIn="zoomIn">
                    <Tilt options={defaultOptions}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/skills/${icon}`}
                          style={{
                            width: isMobile ? "26px" : "44px",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Gotham",
                            fontWeight: "400",
                            fontSize: isMobile ? "12px" : "0.7vw",
                          }}
                        >
                          {icon.replace(".svg", "")}
                        </Typography>
                      </div>
                    </Tilt>
                  </ScrollAnimation>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
};

export default Skills;
