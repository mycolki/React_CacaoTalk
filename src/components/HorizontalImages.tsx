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
          <Button key={image.imageUrl} onClick={() => onClick(image)}>
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
  padding: 12px 18px;
  overflow-y: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.COOL_GREY};
    }
  }
`;

const ImagesWrapper = styled.div`
  white-space: nowrap;

  img {
    margin-right: 10px;
  }
`;
