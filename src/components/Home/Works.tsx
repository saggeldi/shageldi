import {Col, Image, Row, Typography, Button, Space} from "antd";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import {useMyWorks} from "../../hooks/useMyWorks.ts";

const Works = () => {
    const {isMobile} = useResponsive();
    const {works} = useMyWorks();
    return (
        <div style={{
            maxWidth:"100%",

        }}>
            <CodeTitle text="Works"/>
            <br/>
            <Row gutter={[16, 16]}>
                {works.map((work, index) => {
                    return (
                        <Col
                            key={`work-${index}`}
                            xs={24}
                            sm={work.images.length > 1? 24 : 12}
                            md={work.images.length > 1? 24 : 12}
                            style={{
                                marginTop: isMobile ? 0 : 34 + "px",
                            }}
                        >
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
                                        padding:"12px"
                                    }}
                                >
                                    <div style={{
                                        display: "flex",
                                        maxWidth:"100%",
                                        overflow:"auto",
                                        gap:"12px"
                                    }}>
                                        {
                                            work.images.map((image, imgindex)=>{
                                                return  <Image
                                                    wrapperStyle={{
                                                        minWidth:"400px",
                                                        display:"inline-block"
                                                    }}
                                                    src={image}
                                                    style={{
                                                        minWidth:"400px",
                                                        objectFit: "contain",
                                                        minHeight: "350px",
                                                        outline: "none",
                                                    }}
                                                    key={`work-pic-${imgindex}`}
                                                    alt={work.name}/>
                                            })
                                        }
                                    </div>

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
                                            work.links.map(link => (
                                                <Button
                                                    key={link.url}
                                                    onClick={()=>{
                                                        window.open(link.url)
                                                    }}
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                >
                                                    <Space>
                                                        <img
                                                            alt={link.title}
                                                            src={link.image}
                                                            style={{
                                                                width: "24px",
                                                                height: "24px",
                                                            }}
                                                        />
                                                        <Typography
                                                            style={{
                                                                fontFamily: "Yandex",
                                                                fontWeight: "400",
                                                                fontSize: "12px",
                                                            }}
                                                        >
                                                            {link.title}
                                                        </Typography>
                                                    </Space>
                                                </Button>
                                            ))
                                        }

                                    </div>
                                </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Works;
