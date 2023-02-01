import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { ChatList, ChatListHeader } from 'components/Chats';

function ChatListPage() {
  return (
    <Container>
      <ChatListHeader />
      <ChatList />
    </Container>
  );
}

export default ChatListPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
