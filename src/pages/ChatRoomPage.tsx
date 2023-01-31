import { useLocation, useParams } from 'react-router-dom';
import { useUser, useRoom } from 'hooks';

import { ChatBody, ChatRoomHeader } from 'components/ChatRoom';
import { Spacing } from 'components';

interface Location {
  state: {
    unReadCount: number;
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
    <>
      <ChatRoomHeader sender={room.member.name} />
      <Spacing height={44} />
      {user && <ChatBody roomId={roomId} messages={room.messages} user={user} />}
    </>
  );
}

export default ChatRoomPage;
