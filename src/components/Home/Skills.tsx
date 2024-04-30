import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";

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
  return (
    <div>
      <CodeTitle text="Skills" />
      <br />
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Typography
            style={{
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "36px",
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
                  fontSize: "24px",
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
                  fontSize: "24px",
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
                  fontSize: "24px",
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
                  fontSize: "24px",
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
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  key={`icon-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={`/skills/${icon}`} />
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  >
                    {icon.replace(".svg", "")}
                  </Typography>
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
