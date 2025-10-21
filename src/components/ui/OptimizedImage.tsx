import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  quality?: number;
  placeholder?: string;
  sizes?: string;
}

const ImageContainer = styled.div<{ $loading: boolean }>`
  position: relative;
  overflow: hidden;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$loading ? 0.7 : 1};
`;

const Image = styled.img<{ width?: number; height?: number }>`
  width: ${props => props.width ? `${props.width}px` : '100%'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  object-fit: contain;
  transition: opacity 0.3s ease;
  min-height: ${props => props.height ? `${props.height}px` : 'auto'};
`;

const PlaceholderDiv = styled.div<{ width?: number; height?: number }>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  width: ${props => props.width ? `${props.width}px` : '100%'};
  height: ${props => props.height ? `${props.height}px` : '200px'};
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  placeholder,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const generateWebPSrc = (originalSrc: string): string => {
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return originalSrc;
  };

  const generateSrcSet = (originalSrc: string): string => {
    const baseSrc = originalSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
      return `
        ${baseSrc}.webp 1x,
        ${baseSrc}@2x.webp 2x,
        ${originalSrc} 1x
      `;
    }
    return originalSrc;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const webpSrc = generateWebPSrc(src);
            
            const img = new window.Image();
            img.onload = () => {
              setImageSrc(webpSrc);
              setIsLoading(false);
            };
            img.onerror = () => {
              const fallbackImg = new window.Image();
              fallbackImg.onload = () => {
                setImageSrc(src);
                setIsLoading(false);
              };
              fallbackImg.onerror = () => {
                setHasError(true);
                setIsLoading(false);
              };
              fallbackImg.src = src;
            };
            img.src = webpSrc;
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  if (hasError) {
    return (
      <div style={{ width, height, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Image not found</span>
      </div>
    );
  }

  return (
    <ImageContainer ref={imgRef} $loading={isLoading} className={className}>
      {isLoading ? (
        placeholder ? (
          <img src={placeholder} alt={alt} width={width} height={height} />
        ) : (
          <PlaceholderDiv width={width} height={height} />
        )
      ) : (
        <Image
          src={imageSrc}
          srcSet={generateSrcSet(imageSrc)}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;