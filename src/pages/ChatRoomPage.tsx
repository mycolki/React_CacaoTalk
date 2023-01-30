import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { ChatRoomHeader } from 'components/ChatRoom';

function ChatRoomPage() {
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
