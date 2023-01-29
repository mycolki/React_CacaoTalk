import styled from '@emotion/styled';

interface ImageProps {
  src: string;
  alt: string;
  size: number;
  borderRadius?: number;
}

function Image({ src, alt, size, borderRadius }: ImageProps) {
  return <StyledImage src={src} alt={alt} width={size} height={size} borderRadius={borderRadius} />;
}

export default Image;

const StyledImage = styled.img<{ borderRadius?: number }>`
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : 0)};
`;
