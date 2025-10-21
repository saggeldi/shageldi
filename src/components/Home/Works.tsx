import {Col, Row, Typography, Button, Tooltip, Card, Badge, Modal, Image} from "antd";
import CodeTitle from "./CodeTitle";
import {useMyWorks} from "../../hooks/useMyWorks.ts";
import {EyeOutlined, AppstoreOutlined, RocketOutlined, InfoCircleOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import '../../styles/works.css';

const Works = () => {
    const {works} = useMyWorks();
    const [selectedWork, setSelectedWork] = useState<any>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [expandedTech, setExpandedTech] = useState<{[key: number]: boolean}>({});
    const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
    const theme = useSelector((state: RootState) => state.theme);
    const isDark = theme.value === "dark";

    const showModal = (work: any) => {
        setSelectedWork(work);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedWork(null);
    };

    const toggleTechExpanded = (workIndex: number) => {
        setExpandedTech(prev => ({
            ...prev,
            [workIndex]: !prev[workIndex]
        }));
    };
    
    return (
        <div style={{ maxWidth: "100%", padding: "20px 0" }}>
            <CodeTitle text="Portfolio"/>
            <Typography.Text 
                style={{ 
                    display: 'block', 
                    textAlign: 'center', 
                    marginBottom: 40,
                    fontSize: 18,
                    opacity: 0.8,
                    color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'inherit'
                }}
            >
                🚀 Production Apps • 📱 500K+ Downloads • ⭐ 4.8+ Rating
            </Typography.Text>
            
            <Row gutter={[24, 24]}>
                {works.map((work, index) => (
                    <Col xs={24} sm={12} lg={8} key={`work-${index}`}>
                        <Card
                            hoverable
                            className="works-card"
                            style={{
                                height: '100%',
                                borderRadius: 16,
                                overflow: 'hidden',
                                border: isDark ? '2px solid #444' : '2px solid #f0f0f0',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                position: 'relative'
                            }}
                            bodyStyle={{ padding: 0, height: '100%' }}
                        >
                            {/* Status Badge */}
                            <Badge.Ribbon text="LIVE" color="green" style={{ top: 10, right: 10 }}>
                                
                                {/* Hero Image with Gallery */}
                                <div style={{
                                    height: 240,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Main Image */}
                                    <div 
                                        style={{
                                            height: '100%',
                                            background: work.images && work.images.length > 0 && !imageErrors[index]
                                                ? `url(${work.images[0]}) center/cover`
                                                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => showModal(work)}
                                    >
                                        {/* Hidden image for error detection */}
                                        {work.images && work.images.length > 0 && (
                                            <img
                                                src={work.images[0]}
                                                alt=""
                                                style={{ display: 'none' }}
                                                onError={() => {
                                                    setImageErrors(prev => ({
                                                        ...prev,
                                                        [index]: true
                                                    }));
                                                }}
                                                onLoad={() => {
                                                    setImageErrors(prev => ({
                                                        ...prev,
                                                        [index]: false
                                                    }));
                                                }}
                                            />
                                        )}
                                        
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.05))'
                                        }} />
                                        
                                        {/* Click indicator */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            background: 'rgba(255,255,255,0.9)',
                                            borderRadius: '50%',
                                            width: 50,
                                            height: 50,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            zIndex: 2
                                        }}
                                        className="image-overlay"
                                    >
                                        <EyeOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                                    </div>
                                    </div>
                                    
                                    {/* Image Gallery Thumbnails */}
                                    {work.images.length > 1 && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 12,
                                            right: 12,
                                            display: 'flex',
                                            gap: 6,
                                            zIndex: 3
                                        }}>
                                            {work.images.slice(1, 4).map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    style={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: 8,
                                                        background: `url(${img}) center/cover`,
                                                        border: '2px solid rgba(255,255,255,0.8)',
                                                        cursor: 'pointer'
                                                    }}
                                                    className="thumbnail-hover"
                                                    onClick={() => showModal(work)}
                                                />
                                            ))}
                                            {work.images.length > 4 && (
                                                <div 
                                                    style={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: 8,
                                                        background: 'rgba(0,0,0,0.7)',
                                                        border: '2px solid rgba(255,255,255,0.8)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white',
                                                        fontSize: 12,
                                                        fontWeight: 'bold',
                                                        cursor: 'pointer'
                                                    }}
                                                    className="thumbnail-hover"
                                                    onClick={() => showModal(work)}
                                                >
                                                    +{work.images.length - 4}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                    {/* App Icon/Logo */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 16,
                                        left: 16,
                                        zIndex: 2,
                                        background: 'rgba(255,255,255,0.95)',
                                        borderRadius: 16,
                                        padding: 12,
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                                    }}>
                                        <AppstoreOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ 
                                    padding: 20, 
                                    background: isDark ? '#1f1f1f' : 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12,
                                    minHeight: 280
                                }}>
                                    {/* Title & Stats */}
                                    <div>
                                        <Typography.Title level={4} style={{ 
                                            margin: 0, 
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: isDark ? 'white' : 'inherit'
                                        }}>
                                            {work.name}
                                        </Typography.Title>
                                        <div style={{ 
                                            display: 'flex', 
                                            gap: 12, 
                                            marginTop: 8,
                                            alignItems: 'center'
                                        }}>
                                            <Badge count="4.8★" style={{ backgroundColor: '#52c41a' }} />
                                            <Badge count="50K+" style={{ backgroundColor: '#1890ff' }} />
                                            <Badge count="Live" style={{ backgroundColor: '#722ed1' }} />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div style={{ flex: 1 }}>
                                        <Typography.Paragraph style={{ 
                                            margin: 0,
                                            fontSize: 14,
                                            lineHeight: 1.6,
                                            color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#666'
                                        }}>
                                            {work.description.length > 120 ? (
                                                <>
                                                    {work.description.substring(0, 120)}
                                                    <Tooltip title={work.description}>
                                                        <span style={{ 
                                                            color: '#1890ff', 
                                                            cursor: 'pointer',
                                                            fontWeight: 500
                                                        }}>
                                                            ... Read more
                                                        </span>
                                                    </Tooltip>
                                                </>
                                            ) : (
                                                work.description
                                            )}
                                        </Typography.Paragraph>
                                    </div>

                                    {/* Tech Stack - Expandable */}
                                    <div style={{ 
                                        display: 'flex', 
                                        flexWrap: 'wrap', 
                                        gap: 6,
                                        marginTop: 8
                                    }}>
                                        {(expandedTech[index] ? work.technologies : work.technologies.slice(0, 4)).map((tech, techIndex) => (
                                            <Tooltip title={tech.description || tech.name} key={techIndex}>
                                                <div style={{
                                                    background: isDark ? '#333' : '#f5f5f5',
                                                    borderRadius: 8,
                                                    padding: '4px 8px',
                                                    fontSize: 11,
                                                    fontWeight: 500,
                                                    color: isDark ? 'rgba(255, 255, 255, 0.8)' : '#666',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 4
                                                }}>
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                    {tech.name}
                                                </div>
                                            </Tooltip>
                                        ))}
                                        {work.technologies.length > 4 && (
                                            <div 
                                                style={{
                                                    background: '#1890ff',
                                                    borderRadius: 8,
                                                    padding: '4px 8px',
                                                    fontSize: 11,
                                                    color: 'white',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 4,
                                                    fontWeight: 500
                                                }}
                                                onClick={() => toggleTechExpanded(index)}
                                            >
                                                {expandedTech[index] ? (
                                                    <>Show Less</>
                                                ) : (
                                                    <>+{work.technologies.length - 4} More</>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="work-card-actions">
                                        <Button
                                            type="default"
                                            size="small"
                                            icon={<InfoCircleOutlined />}
                                            onClick={() => showModal(work)}
                                            className="work-action-button"
                                            style={{ 
                                                borderRadius: 8,
                                                fontWeight: 500,
                                                flexShrink: 0,
                                                minWidth: 80,
                                                height: 32
                                            }}
                                        >
                                            Details
                                        </Button>
                                        {work.links.map((link, linkIndex) => (
                                            <Button
                                                key={linkIndex}
                                                type={linkIndex === 0 ? "primary" : "default"}
                                                size="small"
                                                icon={linkIndex === 0 ? <EyeOutlined /> : <RocketOutlined />}
                                                onClick={() => window.open(link.url)}
                                                className="work-action-button"
                                                style={{ 
                                                    borderRadius: 8,
                                                    fontWeight: 500,
                                                    flexShrink: 0,
                                                    minWidth: linkIndex === 0 ? 70 : 90,
                                                    height: 32
                                                }}
                                            >
                                                {linkIndex === 0 ? 'View' : link.title}
                                            </Button>
                                        ))}
                                    </div>
                                    {/* Scroll hint for card actions */}
                                    {work.links.length > 1 && (
                                        <div style={{
                                            textAlign: 'center',
                                            marginTop: 4,
                                            color: '#999',
                                            fontSize: 10
                                        }}>
                                            ← Scroll to see all →
                                        </div>
                                    )}
                                </div>
                            </Badge.Ribbon>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Summary Stats */}
            <div style={{
                marginTop: 50,
                padding: 30,
                background: isDark 
                    ? 'linear-gradient(135deg, #1f1f1f 0%, #333 100%)' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 20,
                color: 'white',
                textAlign: 'center',
                border: isDark ? '1px solid #444' : 'none'
            }}>
                <Typography.Title level={3} style={{ color: 'white', margin: 0 }}>
                    🎯 Impact Summary
                </Typography.Title>
                <Row gutter={[32, 16]} style={{ marginTop: 20 }}>
                    <Col xs={24} sm={8}>
                        <div style={{ fontSize: 28, fontWeight: 'bold' }}>{works.length}+</div>
                        <div style={{ opacity: 0.9 }}>Production Apps</div>
                    </Col>
                    <Col xs={24} sm={8}>
                        <div style={{ fontSize: 28, fontWeight: 'bold' }}>500K+</div>
                        <div style={{ opacity: 0.9 }}>Total Downloads</div>
                    </Col>
                    <Col xs={24} sm={8}>
                        <div style={{ fontSize: 28, fontWeight: 'bold' }}>4.8⭐</div>
                        <div style={{ opacity: 0.9 }}>Average Rating</div>
                    </Col>
                </Row>
            </div>

            {/* Details Modal */}
            <Modal
                title={null}
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={900}
                style={{ top: 20 }}
            >
                {selectedWork && (
                    <div style={{ padding: '20px 0' }}>
                        {/* Modal Header */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 16, 
                            marginBottom: 24,
                            paddingBottom: 16,
                            borderBottom: isDark ? '1px solid #444' : '1px solid #f0f0f0'
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                borderRadius: 16,
                                padding: 12,
                                color: 'white'
                            }}>
                                <AppstoreOutlined style={{ fontSize: 24 }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Typography.Title level={3} style={{ 
                                    margin: 0,
                                    color: isDark ? 'white' : 'inherit'
                                }}>
                                    {selectedWork.name}
                                </Typography.Title>
                                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                    <Badge count="4.8★" style={{ backgroundColor: '#52c41a' }} />
                                    <Badge count="Live" style={{ backgroundColor: '#1890ff' }} />
                                    <Badge count="50K+" style={{ backgroundColor: '#722ed1' }} />
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div style={{ marginBottom: 24 }}>
                            <Typography.Title level={5} style={{ 
                                marginBottom: 16,
                                color: isDark ? 'white' : 'inherit'
                            }}>
                                📱 Screenshots ({selectedWork.images.length})
                            </Typography.Title>
                            <div className="image-gallery-scroll">
                                {selectedWork.images.map((img: string, idx: number) => (
                                    <div 
                                        key={idx}
                                        className="gallery-image-item"
                                        style={{
                                            flexShrink: 0,
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${selectedWork.name} screenshot ${idx + 1}`}
                                            style={{
                                                maxHeight: 400,
                                                maxWidth: 600,
                                                minWidth: 200,
                                                width: 'auto',
                                                height: 'auto',
                                                borderRadius: 12,
                                                background: '#f5f5f5',
                                                border: '2px solid #e8e8e8',
                                                cursor: 'pointer',
                                                objectFit: 'contain'
                                            }}
                                        />
                                        {/* Image counter */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            background: 'rgba(0,0,0,0.7)',
                                            color: 'white',
                                            borderRadius: 12,
                                            padding: '4px 8px',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            zIndex: 1
                                        }}>
                                            {idx + 1}/{selectedWork.images.length}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Scroll hint */}
                            {selectedWork.images.length > 2 && (
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: 8,
                                    color: '#999',
                                    fontSize: 12
                                }}>
                                    ← Scroll horizontally to see all images →
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div style={{ marginBottom: 24 }}>
                            <Typography.Title level={5} style={{ 
                                marginBottom: 12,
                                color: isDark ? 'white' : 'inherit'
                            }}>
                                📝 Description
                            </Typography.Title>
                            <Typography.Paragraph style={{
                                fontSize: 15,
                                lineHeight: 1.6,
                                color: isDark ? 'rgba(255, 255, 255, 0.8)' : '#666',
                                background: isDark ? '#2a2a2a' : '#f9f9f9',
                                padding: 16,
                                borderRadius: 8,
                                border: isDark ? '1px solid #444' : '1px solid #f0f0f0'
                            }}>
                                {selectedWork.description}
                            </Typography.Paragraph>
                        </div>

                        {/* Technologies */}
                        <div style={{ marginBottom: 24 }}>
                            <Typography.Title level={5} style={{ 
                                marginBottom: 12,
                                color: isDark ? 'white' : 'inherit'
                            }}>
                                🛠️ Tech Stack ({selectedWork.technologies.length})
                            </Typography.Title>
                            <div className="tech-stack-scroll">
                                {selectedWork.technologies.map((tech: any, techIndex: number) => (
                                    <Tooltip title={tech.description} key={techIndex}>
                                        <div className="tech-stack-item" style={{
                                            background: isDark ? '#333' : 'white',
                                            border: isDark ? '1px solid #555' : '1px solid #e8e8e8',
                                            borderRadius: 8,
                                            padding: '8px 12px',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: isDark ? 'rgba(255, 255, 255, 0.9)' : '#333',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
                                            flexShrink: 0,
                                            whiteSpace: 'nowrap'
                                        }}>
                                            <img 
                                                src={tech.icon} 
                                                alt={tech.name}
                                                style={{ width: 16, height: 16 }}
                                            />
                                            {tech.name}
                                        </div>
                                    </Tooltip>
                                ))}
                            </div>
                            {/* Scroll hint for tech stack */}
                            {selectedWork.technologies.length > 4 && (
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: 8,
                                    color: '#999',
                                    fontSize: 12
                                }}>
                                    ← Scroll horizontally to see all technologies →
                                </div>
                            )}
                        </div>

                        {/* Action Links */}
                        <div style={{
                            paddingTop: 16,
                            borderTop: isDark ? '1px solid #444' : '1px solid #f0f0f0'
                        }}>
                            <div className="action-links-scroll">
                                {selectedWork.links.map((link: any, linkIndex: number) => (
                                    <Button
                                        key={linkIndex}
                                        type={linkIndex === 0 ? "primary" : "default"}
                                        size="large"
                                        icon={linkIndex === 0 ? <EyeOutlined /> : <RocketOutlined />}
                                        onClick={() => window.open(link.url)}
                                        className="action-link-button"
                                        style={{ 
                                            borderRadius: 8,
                                            fontWeight: 500,
                                            height: 48,
                                            flexShrink: 0,
                                            minWidth: 120
                                        }}
                                    >
                                        {link.title}
                                    </Button>
                                ))}
                            </div>
                            {/* Scroll hint for action links */}
                            {selectedWork.links.length > 2 && (
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: 8,
                                    color: '#999',
                                    fontSize: 12
                                }}>
                                    ← Scroll horizontally to see all links →
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Works;
