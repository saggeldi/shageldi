import React, {useEffect, useState, lazy, Suspense} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Button, Space, Tag, Typography, Skeleton} from "antd";
import {useToken} from "../theme/config-theme";
import {ArrowLeftOutlined} from '@ant-design/icons';
import '../styles/markdown.css';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {RootState} from "../features/store.ts";

// Lazy load the heavy MDEditor component
const MDEditor = lazy(() => import('@uiw/react-md-editor'));

// Define the Blog interface
interface Blog {
    id: string;
    title: string;
    description: string;
    date: string;
    coverImage: string;
    tags: string[];
    markdown: string;
}

const BlogDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const {token} = useToken();
    const {t} = useTranslation();

    const theme = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // Fetch the index.json file that contains all blog filenames
                const indexResponse = await fetch("/blogs/index.json");
                const blogFilenames = await indexResponse.json();

                // Use Promise.all to fetch all files in parallel instead of sequential
                const blogPromises = blogFilenames.map(async (filename: string) => {
                    const blogResponse = await fetch(`/blogs/${filename}`);
                    return await blogResponse.json();
                });

                const allBlogs = await Promise.all(blogPromises);
                const foundBlog = allBlogs.find(blog => blog.id === id);

                if (foundBlog) {
                    setBlog(foundBlog);
                } else {
                    console.error(`Blog with id ${id} not found`);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setLoading(false);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    // Format date to a more readable format
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleGoBack = () => {
        navigate('/blogs');
    };

    if (loading) {
        return (
            <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 16px', minHeight: '100vh'}}>
                <Skeleton.Button style={{ marginBottom: 32 }} />
                <Skeleton.Image style={{ width: '100%', height: 300 }} active />
                <Skeleton active title paragraph={{ rows: 6 }} />
                <Skeleton active title={false} paragraph={{ rows: 10 }} />
            </div>
        );
    }

    if (!blog) {
        return (
            <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 16px', minHeight: '100vh'}}>
                <Typography.Text>{t('blogDetail.notFound')}</Typography.Text>
                <Button
                    type="primary"
                    icon={<ArrowLeftOutlined/>}
                    onClick={handleGoBack}
                    style={{marginTop: 16}}
                >
                    {t('blogDetail.backToBlogs')}
                </Button>
            </div>
        );
    }

    return (
        <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 16px', minHeight: '100vh'}}>
            <Button
                icon={<ArrowLeftOutlined/>}
                onClick={handleGoBack}
                style={{marginBottom: 32}}
            >
                {t('blogDetail.backToBlogs')}
            </Button>

            <div style={{ marginBottom: 32 }}>
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                />
            </div>

            <Typography.Title level={2}>
                {blog.title}
            </Typography.Title>

            <Typography.Text type="secondary" style={{display: 'block', marginBottom: 16}}>
                {formatDate(blog.date)}
            </Typography.Text>

            <Space wrap style={{marginBottom: 32}}>
                {blog.tags.map((tag) => (
                    <Tag
                        key={tag}
                        color={token.colorPrimary}
                    >
                        {tag}
                    </Tag>
                ))}
            </Space>

            <Typography.Paragraph style={{marginBottom: 32}}>
                {blog.description}
            </Typography.Paragraph>

            <div 
                className="markdown-body" 
                data-color-mode={theme.value === "light" ? 'light' : 'dark'}
            >
                <Suspense fallback={<Skeleton active paragraph={{ rows: 15 }} />}>
                    <MDEditor
                        value={blog.markdown}
                        preview="preview"
                        hideToolbar
                        visibleDragbar={false}
                        data-color-mode={theme.value === "light" ? 'light' : 'dark'}
                        height={2000}
                        style={{ 
                            backgroundColor: 'transparent'
                        }}
                    />
                </Suspense>
            </div>
        </div>
    );
};

export default BlogDetail;
