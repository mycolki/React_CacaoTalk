import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { ChatList, ChatListHeader as Header } from 'components/Chats';

function ChatListPage() {
  return (
    <Container>
      <Header />
      <ChatList />
    </Container>
  );
}

export default ChatListPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
