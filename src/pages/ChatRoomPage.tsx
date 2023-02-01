import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { useCurrentUser, useChatRoom } from 'hooks';
import { GalleryProvider } from 'context/GalleryContext';
import { ChatRoom, ChatRoomHeader } from 'components/ChatRoom';

interface Location {
  state: {
    unreadCount: number;
  };
}

function ChatRoomPage() {
  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();
  const { room } = useChatRoom({ roomId, unreadCount: state.unreadCount });
  const currentUser = useCurrentUser();

  if (!roomId || !room || !currentUser) {
    return null;
  }

  return (
    <GalleryProvider>
      <Page>
        <ChatRoomHeader user={room.otherUser.name} />
        <ChatRoom roomId={roomId} messages={room.messages} currentUser={currentUser} />
      </Page>
    </GalleryProvider>
  );
}

export default ChatRoomPage;

const Page = styled.div`
  height: 100%;
`;
