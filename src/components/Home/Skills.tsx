import {Col, Row, Typography} from "antd";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import {Tilt} from "react-tilt";
import {defaultOptions} from "./Advantages";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

const imagesArray = [
    "kotlin.svg",
    "java.svg",
    "compose multiplatform.svg",
    "expressjs.svg",
    "reactjs.svg",
    "typescript.svg",
    "nestjs.svg",
    "postgresql.svg",
    "github_actions.svg",
    "bitrise.svg",
    "JUnit.svg",
    "Android Instrumental Test.svg",
];

const Skills = () => {
    const {isMobile} = useResponsive();
    const { t } = useTranslation();
    return (
        <div id={"#skills"}>
            <CodeTitle text={t('skills.title')}/>
            <br/>
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12}>
                    <Typography
                        style={{
                            fontFamily: "Gotham",
                            fontWeight: "400",
                            fontSize: isMobile ? "14px" : "1.6vw",
                        }}
                    >
                        {t('skills.subtitle')}
                    </Typography>
                    <br/>
                    <br/>
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
                                    fontSize: isMobile ? "12px" : "1.0vw",
                                }}
                            >
                                {t('skills.seniorAndroid')}
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                style={{
                                    fontFamily: "Gotham",
                                    fontWeight: "400",
                                    fontSize: isMobile ? "12px" : "1.0vw",
                                }}
                            >
                                {t('skills.crossPlatform')}
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                style={{
                                    fontFamily: "Gotham",
                                    fontWeight: "400",
                                    fontSize: isMobile ? "12px" : "1.0vw",
                                }}
                            >
                                {t('skills.juniorFrontendBackend')}
                            </Typography>
                        </li>
                    </ul>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Row style={{rowGap: "22px"}}>
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
                                                        textAlign:"center"
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
            <br/>
            <br/>
        </div>
    );
};

export default Skills;
