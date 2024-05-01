import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import Communication from "../../assets/icons/Communication";
import Business from "../../assets/icons/Business";
import Privacy from "../../assets/icons/Privacy";
import { Tilt } from "react-tilt";
import ScrollAnimation from "react-animate-on-scroll";

export const defaultOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};

const texts = [
  {
    icon: <Communication />,
    title: "Communication",
    text: "I quickly reply to your messages during our work, since I am online most of time, so cooperation is productive. ",
  },
  {
    icon: <Business />,
    title: "Business awareness",
    text: "Immersing in your business model. I can realize a project the way a client wants to see it, not just a developer.",
  },
  {
    icon: <Privacy />,
    title: "Privacy",
    text: "Some projects have unique properties that shouldn’t be public until the end of implementation or even after",
  },
];

const Advantages = () => {
  const { isMobile } = useResponsive();
  return (
    <div>
      <CodeTitle text="Advantages" />
      <br />
      <br />
      <Row gutter={[24, 24]}>
        {texts.map((item, index) => {
          return (
            <Col key={`adv-${index}`} xs={24} sm={12} md={8}>
              <ScrollAnimation animateIn="jello">
                <Tilt options={defaultOptions}>
                  <div
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: `linear-gradient(180deg, rgba(18, 255, 247, 0.0625) 0%, rgba(179, 255, 171, 0.125) 100%)`,
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
                    {item.icon}
                    <Typography
                      style={{
                        fontFamily: "Yandex",
                        fontWeight: "500",
                        fontSize: isMobile ? "24px" : "2.3vw",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      style={{
                        fontFamily: "Gotham",
                        fontWeight: "400",
                        fontSize: isMobile ? "12px" : "1.0vw",
                        textAlign: "center",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </div>
                </Tilt>
              </ScrollAnimation>
            </Col>
          );
        })}
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Advantages;
