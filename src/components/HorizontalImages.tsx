import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { ImageType } from 'types';

import Button from './Button';
import Image from './Image';

interface HorizontalImagesProps {
  images: ImageType[];
  onClick: (image: ImageType) => void;
  className?: string;
}

function HorizontalImages({ images, onClick, className }: HorizontalImagesProps) {
  return (
    <Container className={className}>
      <ImagesWrapper>
        {images.map(image => (
          <Button onClick={() => onClick(image)}>
            <Image src={image.imageUrl} alt={image.description} size={46} borderRadius="6px" />
          </Button>
        ))}
      </ImagesWrapper>
    </Container>
  );
}

export default HorizontalImages;

const Container = styled.div`
  width: var(--app-width);
  background-color: ${COLORS.PURPLE};
  padding: 12px 0px 12px 18px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  white-space: nowrap;
  gap: 10px;
`;
