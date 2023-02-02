import { memo, useState } from 'react';
import styled from '@emotion/styled';
import { ImageType } from 'types';
import COLORS from 'style/palette';
import { galleryDown } from 'style/animation';
import { Button, Image } from '../Shared';

interface GalleryProps {
  onClick: (image: ImageType, callbackAfterClick: () => void) => void;
}

function Gallery({ onClick }: GalleryProps) {
  const [images, setLocalImages] = useState(() => getLocalImages());

  return (
    <Container>
      <ImagesWrapper>
        {images.map(image => (
          <Button
            key={image.imageUrl}
            onClick={() =>
              onClick(image, () => {
                setLocalImages(images.filter(displayedImage => displayedImage.imageUrl !== image.imageUrl));
              })
            }
          >
            <Image src={image.imageUrl} alt={image.description} size={46} borderRadius="6px" />
          </Button>
        ))}
      </ImagesWrapper>
    </Container>
  );
}

export default memo(Gallery);

function getLocalImages() {
  return Array(7)
    .fill(null)
    .map((_, i) => ({
      imageUrl: `/asset/img-shot-${i + 1}.png`,
      description: `img-shot-${i + 1}`,
    }));
}

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
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    background-clip: padding-box;
    border: 6px solid transparent;
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
