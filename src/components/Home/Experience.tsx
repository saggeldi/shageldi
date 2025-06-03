import {Collapse, CollapseProps, Row, Typography} from "antd";
import {useToken} from "../../theme/config-theme";
import CodeTitle from "./CodeTitle";
import useResponsive from "../../hooks/useResponsive";
import Link from "../../assets/icons/Link";
import Location from "../../assets/icons/Location";
import ScrollAnimation from "react-animate-on-scroll";

export const experienceData = [
    {
        key: "1",
        title: "Mobile Developer",
        period: "2020-2023",
        location: "Ashgabat, Turkmenistan",
        company: "Geekspace Turkmenistan",
        site: "https://geekspace.dev"
    },
    {
        key: "2",
        title: "Mobile Developer",
        period: "2021-2022",
        location: "Ashgabat, Turkmenistan",
        company: "Pikir",
        site: "https://pikir.biz"
    },
    {
        key: "3",
        title: "Web Development mentor",
        period: "2022-2023",
        location: "Ashgabat, Turkmenistan",
        company: "Bootcamp Turkmenistan",
        site: "http://bootcamp.com.tm/"
    },
    {
        key: "4",
        title: "Self employment",
        period: "2023-2025",
        location: "Ashgabat, Turkmenistan",
        company: "Freelancer",
        site: "https://shageldi.vercel.app"
    },
];


const Experience = () => {
    const {token} = useToken();
    const {isMobile} = useResponsive();


    const items: CollapseProps["items"] = experienceData.map((exp) => ({
        key: exp.key,
        style: {
            width: "100%",
            borderRadius: "20px",
            borderStyle: "solid",
            borderColor: token.colorText,
            borderWidth: "1px",
            padding: "12px",
        },
        label: (
            <Row justify={"space-between"} style={{width: "100%"}}>
                <Typography
                    style={{
                        fontFamily: "Yandex",
                        fontWeight: "500",
                        fontSize: isMobile ? "12px" : "2.4vw",
                    }}
                >
                    {exp.title}
                </Typography>
                <Row style={{gap: "12px"}}>
                    <Typography
                        style={{
                            fontFamily: "Yandex",
                            fontWeight: "500",
                            fontSize: isMobile ? "12px" : "2.4vw",
                        }}
                    >
                        {exp.period}
                    </Typography>
                </Row>
            </Row>
        ),
        children: (
            <Row style={{gap: isMobile ? "8px" : "24px"}}>
                <Row style={{gap: "12px", alignItems: "center"}}>
                    <Location
                        color={token.colorText}
                        style={{
                            width: isMobile ? "15px" : "24px",
                            height: isMobile ? "15px" : "24px",
                        }}
                    />
                    <Typography
                        style={{
                            fontFamily: "Gotham",
                            fontWeight: "400",
                            fontSize: isMobile ? "12px" : "16px",
                        }}
                    >
                        {exp.location}
                    </Typography>
                </Row>

                <Row style={{gap: "12px", rowGap: "24px", alignItems: "center"}} onClick={()=>{
                    window.open(exp.site)
                }}>
                    <Link
                        color={token.colorText}
                        style={{
                            width: isMobile ? "15px" : "24px",
                            height: isMobile ? "15px" : "24px",
                        }}
                    />
                    <Typography
                        style={{
                            fontFamily: "Gotham",
                            fontWeight: "400",
                            fontSize: isMobile ? "12px" : "16px",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                    >
                        {exp.company}
                    </Typography>
                </Row>
            </Row>
        ),
    }));

    return (
        <div>
            <CodeTitle text="Experience"/>
            <br/>

            <ScrollAnimation animateIn="fadeIn">
                <Collapse
                    items={items}
                    expandIconPosition="end"
                    expandIcon={(props) =>
                        props.isActive ? (
                            <img
                                src="/icons/zondicons_minus-outline.svg"
                                style={{
                                    width: isMobile ? "15px" : "24px",
                                }}
                            />
                        ) : (
                            <img
                                src="/icons/zondicons_add-outline.svg"
                                style={{
                                    width: isMobile ? "15px" : "24px",
                                }}
                            />
                        )
                    }
                    defaultActiveKey={items.map(it=> it.key+"")}
                    style={{
                        backgroundColor: "transparent",
                        width: "100%",
                        borderRadius: "20px",
                        borderWidth: "0px",
                        display: "flex",
                        gap: "12px",
                        flexDirection: "column",
                    }}
                />
            </ScrollAnimation>
        </div>
    );
};

export default Experience;
