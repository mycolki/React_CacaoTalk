import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { Image as ImageType } from 'types';

import Button from './Button';
import Image from './Image';

interface GalleryProps {
  images: ImageType[];
  onClick: (image: ImageType) => void;
}

function Gallery({ images, onClick }: GalleryProps) {
  return (
    <Container>
      <ImagesWrapper>
        {images.map(image => (
          <Button onClick={() => onClick(image)}>
            <Image src={image.imgUrl} alt={image.description} size={46} borderRadius="6px" />
          </Button>
        ))}
      </ImagesWrapper>
    </Container>
  );
}

export default Gallery;

const slideDown = keyframes`
  0% {
    height:0
  }
  100% {
    height:73.5px
  }
`;

const Container = styled.div`
  width: var(--app-width);
  background-color: ${COLORS.PURPLE};
  padding: 12px 0px 12px 18px;
  animation-name: ${slideDown};
  animation-duration: 100ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

const ImagesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  white-space: nowrap;
  gap: 10px;
`;
