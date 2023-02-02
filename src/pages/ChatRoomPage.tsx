import styled from '@emotion/styled';
import { useCurrentUser, useChatRoom } from 'hooks';
import { GalleryProvider } from 'context/GalleryContext';
import { ChatRoom, ChatRoomHeader } from 'components/ChatRoom';
import { useParams } from 'react-router-dom';

function ChatRoomPage() {
  const currentUser = useCurrentUser();
  const { roomId } = useParams<{ roomId: string }>();
  const { room } = useChatRoom(roomId);

  if (!roomId || !room || !currentUser) {
    return null;
  }

  return (
    <GalleryProvider>
      <Page>
        <ChatRoomHeader otherUser={room.otherUser.name} />
        <ChatRoom roomId={roomId} messages={room.messages} currentUser={currentUser} />
      </Page>
    </GalleryProvider>
  );
}

export default ChatRoomPage;

const Page = styled.div`
  height: 100%;
`;
