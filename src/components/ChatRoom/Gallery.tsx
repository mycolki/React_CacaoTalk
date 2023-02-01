import { memo } from 'react';
import styled from '@emotion/styled';
import { ImageType } from 'types';
import COLORS from 'style/palette';
import { galleryDown } from 'style/animation';
import { Button, Image } from '../Shared';

interface GalleryProps {
  images: ImageType[];
  onClick: (image: ImageType) => void;
}

function Gallery({ images, onClick }: GalleryProps) {
  return (
    <Container>
      <ImagesWrapper>
        {images.map(({ imageUrl, description }) => (
          <Button key={imageUrl} onClick={() => onClick({ imageUrl, description })}>
            <Image src={imageUrl} alt={description} size={46} borderRadius="6px" />
          </Button>
        ))}
      </ImagesWrapper>
    </Container>
  );
}

export default memo(Gallery);

const Container = styled.div`
  width: var(--app-width);
  background-color: ${COLORS.PURPLE};
  padding: 12px 18px;
  overflow-y: hidden;
  overflow-x: auto;
  animation-name: ${galleryDown};
  animation-duration: 150ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  box-shadow: 0 2px 4px 0 ${COLORS.PURPLE_OPACITY40};

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
