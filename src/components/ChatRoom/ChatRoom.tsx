import { useCallback, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { UserType, MessageType, ImageType } from 'types';
import { useSendMessage } from 'hooks';
import { GalleryContext } from 'context/GalleryContext';
import COLORS from 'style/palette';
import Chats from './Chat/Chats';
import MessageForm from './Message/MessageForm';
import Gallery from './Gallery';

interface ChatRoomProps {
  messages: MessageType[];
  currentUser: UserType;
  roomId: string;
}

function ChatRoom({ messages, currentUser, roomId }: ChatRoomProps) {
  const [localImages, setLocalImages] = useState(() => getLocalImages());
  const [uploadingImage, setUploadingImage] = useState<ImageType | null>(null);
  const { showingGallery } = useContext(GalleryContext);
  const { sendMessage, sendMessageAsync } = useSendMessage(roomId);

  const uploadImage = useCallback(
    async (image: ImageType) => {
      setUploadingImage(image);

      await sendMessageAsync({
        type: 'image',
        image,
        user: currentUser,
      });

      setUploadingImage(null);
      setLocalImages(localImages.filter(({ imageUrl }) => imageUrl !== image.imageUrl));
    },
    [localImages, sendMessageAsync, currentUser]
  );

  return (
    <Container>
      {showingGallery && <Gallery images={localImages} onClick={uploadImage} />}
      <Chats messages={messages} currentUser={currentUser} uploadingImage={uploadingImage} />
      <MessageForm
        onSubmit={(text: string) => {
          sendMessage({
            type: 'text',
            text,
            user: currentUser,
          });
        }}
      />
    </Container>
  );
}

export default ChatRoom;

function getLocalImages() {
  return Array(7)
    .fill(null)
    .map((_, i) => ({
      imageUrl: `/asset/img-shot-${i + 1}.png`,
      description: `img-shot-${i + 1}`,
    }));
}

const Container = styled.div`
  height: calc(100% - var(--header));
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: ${COLORS.PALE_GREY};
`;
