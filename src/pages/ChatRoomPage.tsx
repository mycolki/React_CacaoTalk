import { HorizontalDivider } from 'components';
import { ChatRoomHeader } from 'components/ChatRoom';

function ChatRoomPage() {
  return (
    <>
      <ChatRoomHeader sender="장만월 사장님" />
      <HorizontalDivider text="12/13 월요일" />
    </>
  );
}

export default ChatRoomPage;
