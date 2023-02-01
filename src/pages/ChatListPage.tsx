import styled from '@emotion/styled';
import COLORS from 'style/palette';

import { ChatList, ChatListHeader as Header } from 'components/Chats';

function ChatListPage() {
  return (
    <Page>
      <Header />
      <ChatList />
    </Page>
  );
}

export default ChatListPage;

const Page = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
