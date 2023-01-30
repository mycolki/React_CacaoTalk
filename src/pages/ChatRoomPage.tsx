import { useLocation, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { ChatRoomHeader } from 'components/ChatRoom';
import useUpdateChatReadCount from 'hooks/useUpdateChatReadCount';

interface Location {
  state: {
    hasUnreadMessage: boolean;
  };
}

function ChatRoomPage() {
  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();

  useUpdateChatReadCount({ roomId, hasUnreadMessage: state.hasUnreadMessage });

  return (
    <Container>
      <ChatRoomHeader sender="장만월 사장님" />
    </Container>
  );
}

export default ChatRoomPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.PALE_GREY};
`;
