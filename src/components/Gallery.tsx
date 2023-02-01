import { useContext, useState } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MessageContext } from 'context/Message';
import { useSendMessage } from 'hooks';
import { ImageType, Member } from 'types';

import HorizontalImages from './HorizontalImages';

interface GalleryProps {
  roomId: string;
  user: Member;
}

function Gallery({ roomId, user }: GalleryProps) {
  const [localImages, setLocalImages] = useState(() => getLocalImages());
  const { cacheLocalImage, removeLocalImageCache } = useContext(MessageContext);
  const { sendMessageAsync } = useSendMessage(roomId);

  const handleSendMessage = async (image: ImageType) => {
    cacheLocalImage(image);
    await sendMessageAsync({
      type: 'image',
      image,
      sender: user,
    });
    setLocalImages(localImages.filter(({ imageUrl }) => imageUrl !== image.imageUrl));
    removeLocalImageCache();
  };

  return <GalleryImages images={localImages} onClick={handleSendMessage} />;
}

export default Gallery;

function getLocalImages() {
  const localImages = Array(7)
    .fill(null)
    .map((_, i) => ({
      imageUrl: `/asset/img-shot-${i + 1}.png`,
      description: `img-shot-${i + 1}`,
    }));

  return localImages;
}

const slideDown = keyframes`
  0% {
    height:0
  }
  100% {
    height:73.5px
  }
`;

const GalleryImages = styled(HorizontalImages)`
  animation-name: ${slideDown};
  animation-duration: 100ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;
