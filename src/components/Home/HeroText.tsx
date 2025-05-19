import {Button, Space, Typography} from "antd";
import {useToken} from "../../theme/config-theme";
import useResponsive from "../../hooks/useResponsive";
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";

const HeroText = () => {
    const {token} = useToken();
    const {isMobile} = useResponsive();
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <Space direction="vertical" size={"large"}>
            <Typography
                style={{
                    fontSize: isMobile ? "12px" : "1.8vw",
                    fontWeight: 500,
                    fontFamily: "Gotham",
                    backgroundColor: token.colorPrimary,
                    color: "black",
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "8px",
                }}
            >
                {t('hero.jobTitle')}
            </Typography>
            <div>
                <Typography
                    style={{
                        fontSize: isMobile ? "24px" : "2.2vw",
                        fontWeight: 600,
                        fontFamily: "Gotham",
                    }}
                >
                    {t('hero.talkIsCheap').split(' ').slice(0, -1).join(' ')} <label style={{color: token.colorPrimary}}>{t('hero.talkIsCheap').split(' ').slice(-1)[0]}</label>
                </Typography>
                <Typography
                    style={{
                        fontSize: isMobile ? "24px" : "2.2vw",
                        fontWeight: 600,
                        fontFamily: "Gotham",
                    }}
                >
                    {t('hero.showMeTheProject').split(' ').slice(0, -1).join(' ')}{" "}
                    <label style={{color: token.colorPrimary}}>{t('hero.showMeTheProject').split(' ').slice(-1)[0]}</label>
                </Typography>
            </div>
            <Typography
                style={{
                    fontSize: isMobile ? "12px" : "1.0vw",
                    fontWeight: 400,
                    fontFamily: "Gotham",
                }}
            >
                {t('hero.description')}{" "}
            </Typography>
            <Button
                type="link"
                style={{
                    padding: 0,
                }}
            >
                <Typography
                    onClick={() => {
                        navigator("/blogs");
                    }}
                    style={{
                        textDecoration: "underline",
                        fontSize: isMobile ? "12px" : "1.3vw",
                        fontWeight: 500,
                        fontFamily: "Gotham",
                        color: token.colorPrimary,
                    }}
                >
                    {t('hero.readBlogs')}
                </Typography>
            </Button>
        </Space>
    );
};

export default HeroText;
