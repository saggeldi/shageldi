import { Col, Row, Typography } from "antd";
import CodeTitle from "./CodeTitle";
import { useToken } from "../../theme/config-theme";

const Contact = () => {
  const { token } = useToken();
  return (
    <div>
      <br />
      <CodeTitle text="Contact" />
      <br />
      <Typography
        style={{
          textAlign: "center",
          width: "100%",
          fontFamily: "Gotham",
          fontWeight: "500",
          fontSize: "20px",
        }}
      >
        Just give me a message whenever and howeveryou want and we well start
        our cooperetion.
      </Typography>

      <br />

      <Row gutter={[32, 32]}>
        <Col sm={24} md={12}>
          <input
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              outline: "none",
              borderColor: token.colorText,
              borderRadius: "35px",
              padding: "22px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
              width: "100%",
              color: token.colorText,
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "24px",
            }}
            placeholder="NAME"
            type="text"
          />
        </Col>
        <Col sm={24} md={12}>
          <input
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              outline: "none",
              borderColor: token.colorText,
              borderRadius: "35px",
              padding: "22px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
              width: "100%",
              color: token.colorText,
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "24px",
            }}
            placeholder="EMAIL"
            type="email"
          />
        </Col>
        <Col xs={24}>
          <textarea
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: token.colorText,
              outline: "none",
              borderRadius: "20px",
              padding: "22px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
              width: "100%",
              color: token.colorText,
              fontFamily: "Gotham",
              fontWeight: "400",
              fontSize: "24px",
              maxWidth: "100%",
              minWidth: "100%",
              minHeight: "250px",
            }}
            placeholder="MESSAGE"
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row
        style={{
          width: "100%",
        }}
        justify={"center"}
        align={"stretch"}
      >
        <Row
          align={"stretch"}
          justify={"space-between"}
          style={{
            alignItems: "center",
            gap: "50px",
            backgroundColor: token.colorPrimary,
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingLeft: "32px",
            paddingRight: "32px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <img
            src="/icons/send.svg"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <Typography
            style={{
              fontFamily: "Yandex",
              fontWeight: "700",
              fontSize: "24px",
              color: `rgba(32, 33, 36, 1)`,
            }}
          >
            Send
          </Typography>
          <label></label>
        </Row>
      </Row>
      <br />
      <br />
    </div>
  );
};

export default Contact;
