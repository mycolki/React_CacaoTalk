import { useSendMessage } from 'hooks';
import { useState } from 'react';
import { Member } from 'types';

import HorizontalImages from './HorizontalImages';

interface GalleryProps {
  roomId: string;
  user: Member;
}

function Gallery({ roomId, user }: GalleryProps) {
  const [localImages, setLocalImages] = useState(() => getLocalImages());

  const sendMessage = useSendMessage(roomId);

  return (
    <HorizontalImages
      images={localImages}
      onClick={image => {
        sendMessage({
          type: 'image',
          image,
          sender: user,
        });
        setLocalImages(localImages.filter(({ imageUrl }) => imageUrl !== image.imageUrl));
      }}
    />
  );
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
