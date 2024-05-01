import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";
import { Button } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import Github from "../../assets/icons/Github";
import { useToken } from "../../theme/config-theme";
import Link from "../../assets/icons/Link";
import ScrollAnimation from "react-animate-on-scroll";

const Works = () => {
  const { isMobile, isTablet } = useResponsive();
  const { token } = useToken();
  return (
    <div>
      <CodeTitle text="Works" />
      <br />
      <Row gutter={[16, 16]}>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <Col
              key={`work-${index}`}
              xs={24}
              sm={12}
              md={isTablet ? 12 : 8}
              style={{
                marginTop: isMobile ? 0 : index * 34 + "px",
              }}
            >
              <ScrollAnimation animateIn="backInLeft">
                <div
                  style={{
                    width: "100%",
                    background: `linear-gradient(180deg, rgba(18, 255, 247, 0.0625) 46.27%, rgba(179, 255, 171, 0.25) 100%)`,
                    objectFit: "cover",
                    borderRadius: "20px",
                    borderColor: "#B3FFAB",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <img
                    src=""
                    style={{
                      width: "100%",
                      height: "350px",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      borderStyle: "solid",
                      borderColor: "transparent",
                      backgroundColor: "#D9D9D9",
                      outline: "none",
                    }}
                  />
                  <Typography
                    style={{
                      fontFamily: "Yandex",
                      fontWeight: "500",
                      fontSize: isMobile ? "24px" : "3.2vw",
                    }}
                  >
                    TmMuse
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Gotham",
                      fontWeight: "400",
                      fontSize: isMobile ? "12px" : "16px",
                      textAlign: "center",
                      margin: "12px",
                    }}
                  >
                    "TmMuse" является порталом по предоставлению информационного
                    сервиса в сфере культуры, развлечения и досуга. В приложений
                    размещаются расписание (функция Календарь) на кинофильмы,
                    спектакли, концертов, выставок, вечеринок, и справочная
                    информация по заведениям столицы Ашхабада (Туркменистан) и
                    другие сервисы в сфере HoReCa.
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      padding: "12px",
                    }}
                  >
                    <Button
                      startIcon={
                        <Link
                          color={token.colorText}
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      }
                    >
                      <Typography
                        style={{
                          fontFamily: "Yandex",
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                      >
                        Live Preview
                      </Typography>
                    </Button>

                    <Button
                      startIcon={
                        <Github
                          color={token.colorText}
                          style={{
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      }
                    >
                      <Typography
                        style={{
                          fontFamily: "Yandex",
                          fontWeight: "400",
                          fontSize: "12px",
                        }}
                      >
                        View Code
                      </Typography>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Works;
