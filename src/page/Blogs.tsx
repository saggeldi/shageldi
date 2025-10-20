import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card, Col, Row, Tag, Typography, Skeleton} from "antd";
import {useToken} from "../theme/config-theme";
import { useTranslation } from "react-i18next";

// Define the Blog interface
interface Blog {
    id: string;
    title: string;
    description: string;
    date: string;
    coverImage: string;
    tags: string[];
    markdown?: string; // Make markdown optional for listing
}

// Blog summary interface for faster loading
interface BlogSummary {
    id: string;
    title: string;
    description: string;
    date: string;
    coverImage: string;
    tags: string[];
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {token} = useToken();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Fetch the index.json file that contains all blog filenames
                const indexResponse = await fetch("/blogs/index.json");
                const blogFilenames = await indexResponse.json();

                // Fetch each blog file but exclude markdown for faster loading
                const blogPromises = blogFilenames.map(async (filename: string) => {
                    const blogResponse = await fetch(`/blogs/${filename}`);
                    const blogData = await blogResponse.json();
                    
                    // Return blog data without markdown for listing page
                    const { markdown, ...blogSummary } = blogData;
                    return blogSummary as BlogSummary;
                });

                const blogData = await Promise.all(blogPromises);
                setBlogs(blogData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Format date to a more readable format
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 16px'}}>
            <Typography.Title level={2} style={{textAlign: 'center', marginBottom: 32}}>
                {t('blogs.title')}
            </Typography.Title>

            {loading ? (
                <Row gutter={[32, 32]}>
                    {[1, 2, 3].map((i) => (
                        <Col xs={24} md={12} lg={8} key={i}>
                            <Card>
                                <Skeleton.Image style={{ width: '100%', height: 200 }} active />
                                <Skeleton active paragraph={{ rows: 3 }} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : blogs.length === 0 ? (
                <Typography.Text>{t('blogs.notFound')}</Typography.Text>
            ) : (
                <Row gutter={[32, 32]}>
                    {blogs.map((blog) => (
                        <Col xs={24} md={12} lg={8} key={blog.id}>
                            <Card
                                hoverable
                                style={{
                                    height: '100%',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    backgroundColor: token.colorBgContainer,
                                    color: token.colorText,
                                }}
                                cover={
                                    <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={blog.coverImage}
                                            alt={blog.title}
                                            loading="lazy"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                filter: 'brightness(0.95)',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                width: '100%',
                                                height: '60px',
                                                background:
                                                    'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                                            }}
                                        />
                                    </div>
                                }
                            >
                                <div style={{ padding: 16, flexGrow: 1 }}>
                                    <Typography.Title level={5} style={{ fontWeight: 700, marginBottom: 8 }}>
                                        {blog.title}
                                    </Typography.Title>

                                    <Typography.Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
                                        {formatDate(blog.date)}
                                    </Typography.Text>

                                    <Typography.Paragraph style={{ marginBottom: 16 }}>
                                        {blog.description.length > 150
                                            ? `${blog.description.substring(0, 150)}...`
                                            : blog.description}
                                    </Typography.Paragraph>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 8,
                                            marginTop: 8,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {blog.tags.map((tag) => (
                                            <Tag
                                                key={tag}
                                                color={token.colorPrimary}
                                                style={{
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>

                                    <div>
                                        <Link
                                            to={`/blogs/${blog.id}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <span
                                                style={{
                                                    marginTop: 8,
                                                    display: 'inline-block',
                                                    color: token.colorPrimary,
                                                    fontWeight: 'bold',
                                                    borderBottom: `2px solid ${token.colorPrimary}`,
                                                    transition: 'color 0.3s ease, border-color 0.3s ease',
                                                }}
                                            >
                                                {t('blogs.readMore')}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default Blogs;
