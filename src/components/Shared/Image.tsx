interface ImageProps {
  src: string;
  alt: string;
  size: number;
  borderRadius?: string;
  className?: string;
}

function Image({ src, alt, size, borderRadius, className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: borderRadius ?? 0,
      }}
      className={className}
    />
  );
}

export default Image;
