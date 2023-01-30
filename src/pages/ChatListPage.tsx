import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { Spacing } from 'components';
import { ChatList, ChatListHeader } from 'components/Chat';

function ChatListPage() {
  return (
    <Container>
      <ChatListHeader />
      <Spacing height={10} />
      <ChatList />
    </Container>
  );
}

export default ChatListPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
