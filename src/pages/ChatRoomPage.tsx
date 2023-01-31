import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { useUser, useRoom } from 'hooks';

import { ChatBottom, ChatMessages, ChatRoomHeader } from 'components/ChatRoom';

interface Location {
  state: {
    unReadCount: boolean;
  };
}

function ChatRoomPage() {
  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();
  const { room } = useRoom({ roomId, unReadCount: state.unReadCount });
  const user = useUser();

  if (!roomId || !room) {
    return null;
  }

  return (
    <Container>
      <ChatRoomHeader sender={room.member.name} />

      {user && (
        <>
          <ChatMessages messages={room.messages} user={user} />
          <ChatBottom roomId={roomId} user={user} />
        </>
      )}
    </Container>
  );
}

export default ChatRoomPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.PALE_GREY};
`;
