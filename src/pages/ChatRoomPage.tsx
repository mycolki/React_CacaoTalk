import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import useUpdateChatReadCount from 'hooks/useUpdateChatReadCount';
import { formatDate } from 'utils/formatDate';
import { getRoom } from 'handlers';

import { ChatMessages, ChatRoomHeader } from 'components/ChatRoom';

interface Location {
  state: {
    hasUnreadMessage: boolean;
  };
}

function ChatRoomPage() {
  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();

  useUpdateChatReadCount({ roomId, hasUnreadMessage: state.hasUnreadMessage });

  const { data: room } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoom(roomId), // 변경:
    enabled: Boolean(roomId),
    select: data => ({
      ...data,
      messages: data.messages.map(message => ({
        ...message,
        timeStamp: formatDate(message.timeStamp, 'HH:mm'),
      })),
    }),
  });

  if (!room) {
    return null;
  }

  return (
    <Container>
      <ChatRoomHeader sender={room.member.name} />
      <ChatMessages messages={room.messages} />
    </Container>
  );
}

export default ChatRoomPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.PALE_GREY};
`;
