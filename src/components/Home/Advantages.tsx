import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";

const texts = [
  {
    icon: "icon-park-solid_communication.svg",
    title: "Communication",
    text: "I quickly reply to your messages during our work, since I am online most of time, so cooperation is productive. ",
  },
  {
    icon: "icon-park-solid_user-business.svg",
    title: "Business awareness",
    text: "Immersing in your business model. I can realize a project the way a client wants to see it, not just a developer.",
  },
  {
    icon: "ic_round-privacy-tip.svg",
    title: "Privacy",
    text: "Some projects have unique properties that shouldn’t be public until the end of implementation or even after",
  },
];

const Advantages = () => {
  return (
    <div>
      <CodeTitle text="Advantages" />
      <br />
      <br />
      <Row gutter={24}>
        {texts.map((item, index) => {
          return (
            <Col key={`adv-${index}`} xs={24} sm={12} md={8}>
              <div
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: `rgb(18,255,247)`,
                  background: `linear-gradient(180deg, rgba(18,255,247,0) 0%, rgba(179,255,171,1) 100%)`,
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
                  src={`/icons/${item.icon}`}
                  style={{ width: "48px", height: "48px" }}
                />
                <Typography
                  style={{
                    fontFamily: "Yandex",
                    fontWeight: "500",
                    fontSize: "36px",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  style={{
                    fontFamily: "Gotham",
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </Typography>
              </div>
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
