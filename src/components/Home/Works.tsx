import {Col, Image, Row, Typography} from "antd";
import CodeTitle from "./CodeTitle";
import {Button} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import ScrollAnimation from "react-animate-on-scroll";
import {useMyWorks} from "../../hooks/useMyWorks.ts";

const Works = () => {
    const {isMobile, isTablet} = useResponsive();
    const {works} = useMyWorks();
    return (
        <div>
            <CodeTitle text="Works"/>
            <br/>
            <Row gutter={[16, 16]}>
                {works.map((work, index) => {
                    return (
                        <Col
                            key={`work-${index}`}
                            xs={24}
                            sm={12}
                            md={isTablet ? 12 : 8}
                            style={{
                                marginTop: isMobile ? 0 : 34 + "px",
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
                                    <Image
                                        wrapperStyle={{
                                            width:"100%"
                                        }}
                                        src={work.images[0]}
                                        style={{
                                            width: "100%",
                                            objectFit: "cover",
                                            height: "350px",
                                            borderTopLeftRadius: "20px",
                                            borderTopRightRadius: "20px",
                                            borderStyle: "solid",
                                            borderColor: "transparent",
                                            backgroundColor: "#D9D9D9",
                                            outline: "none",
                                        }}
                                        alt={work.name}/>

                                    <Typography
                                        style={{
                                            fontFamily: "Yandex",
                                            fontWeight: "500",
                                            fontSize: isMobile ? "24px" : "1.6vw",
                                            textAlign:"center"
                                        }}
                                    >
                                        {work.name}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Gotham",
                                            fontWeight: "400",
                                            fontSize: isMobile ? "12px" : "16px",
                                            textAlign: "center",
                                            margin: "12px",
                                            height:"200px"
                                        }}
                                    >
                                        {work.description}
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
                                        {
                                            work.links.map(link => (<Button
                                                key={link.url}
                                                onClick={()=>{
                                                    window.open(link.url)
                                                }}
                                                startIcon={
                                                    <img
                                                        alt={link.title}
                                                        src={link.image}
                                                        style={{
                                                            width: "24px",
                                                            height: "24px",
                                                        }}/>
                                                }
                                            >
                                                <Typography
                                                    style={{
                                                        fontFamily: "Yandex",
                                                        fontWeight: "400",
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    {link.title}
                                                </Typography>
                                            </Button>))
                                        }

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
