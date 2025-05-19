import React from 'react';
import {Button, Image, Typography, Card, Flex} from "antd";

interface Props {
    url: string;
    title: string;
    image: string;
}

const TelegramChanel: React.FC<Props> = (props) => {
    return (
        <Card style={{
            width: '100%',
            backgroundColor:"rgba(255, 255, 255, 0.2)",
            border:"1px solid silver",
        }}>
            <div className="card-content" style={{ padding: '16px' }}>
                <Flex vertical gap="16px" align="center" justify="center">
                    <Image src={props.image} alt="Telegram" style={{
                        width:"80px",
                        height:"80px",
                        objectFit: "cover",
                        borderRadius:"12px"
                    }}/>

                    <Typography
                        style={{
                            fontFamily: "Yandex",
                            fontWeight: "500",
                            fontSize: "18px",
                            textAlign: "center",
                        }}
                    >
                        {props.title}<br/>
                        <span style={{
                            fontFamily: "Yandex",
                            fontWeight: "400",
                            fontSize: "12px",
                            textAlign: "center",
                        }}>
                             56 members
                        </span>
                    </Typography>


                    <Button onClick={()=> window.open(props.url)} type={"primary"} style={{
                        fontFamily: "Yandex",
                        fontWeight: "500",
                        fontSize: "16px",
                    }}>
                        Join My Telegram Dev Group
                    </Button>
                </Flex>
            </div>
        </Card>
    );
};

export default TelegramChanel;
