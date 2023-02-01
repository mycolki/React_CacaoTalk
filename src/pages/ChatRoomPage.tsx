import { useLocation, useParams } from 'react-router-dom';
import { TalkProvider } from 'context/Talk';
import styled from '@emotion/styled';
import { useUser, useRoom } from 'hooks';

import { RoomBottom as Bottom, RoomBody, ChatRoomHeader as Header } from 'components/ChatRoom';

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

  if (!roomId || !room || !user) {
    return null;
  }

  return (
    <TalkProvider>
      <Page>
        <Header sender={room.member.name} />
        <RoomBody roomId={roomId} messages={room.messages} user={user} />
        <Bottom roomId={roomId} user={user} />
      </Page>
    </TalkProvider>
  );
}

export default ChatRoomPage;

const Page = styled.div`
  height: 100%;
`;
