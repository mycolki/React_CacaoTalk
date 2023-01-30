interface ImageProps {
  src: string;
  alt: string;
  size: number;
  borderRadius?: string;
}

function Image({ src, alt, size, borderRadius }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: borderRadius ?? 0,
      }}
    />
  );
}

export default Image;
