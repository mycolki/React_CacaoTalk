import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { ChatRoomList, ChatRoomListHeader } from 'components/ChatRoomList';

function ChatRoomListPage() {
  return (
    <Page>
      <ChatRoomListHeader />
      <ChatRoomList />
    </Page>
  );
}

export default ChatRoomListPage;

const Page = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
