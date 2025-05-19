import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Button, Image, Space, Tag, Typography} from "antd";
import MDEditor from '@uiw/react-md-editor';
import {useToken} from "../theme/config-theme";
import {ArrowLeftOutlined} from '@ant-design/icons';
import '../styles/markdown.css';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {RootState} from "../features/store.ts";

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

                // Fetch each blog file until we find the one with the matching id
                for (const filename of blogFilenames) {
                    const blogResponse = await fetch(`/blogs/${filename}`);
                    const blogData = await blogResponse.json();

                    if (blogData.id === id) {
                        setBlog(blogData);
                        setLoading(false);
                        return;
                    }
                }

                // If we get here, we didn't find the blog
                console.error(`Blog with id ${id} not found`);
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
            <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 16px'}}>
                <Typography.Text>{t('blogDetail.loading')}</Typography.Text>
            </div>
        );
    }

    if (!blog) {
        return (
            <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 16px'}}>
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
        <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 16px'}}>
            <Button
                icon={<ArrowLeftOutlined/>}
                onClick={handleGoBack}
                style={{marginBottom: 32}}
            >
                {t('blogDetail.backToBlogs')}
            </Button>

            <Image
                src={blog.coverImage}
                alt={blog.title}
                wrapperStyle={{
                    width: '100%',
                }}
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: 32
                }}
            />

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

            <div className="markdown-body" data-color-mode={theme.value === "light" ? 'light' : 'dark'}>
                <MDEditor.Markdown
                    source={blog.markdown}
                    style={{padding: '8px'}}/>
            </div>
        </div>
    );
};

export default BlogDetail;
