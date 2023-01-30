import { Image, Spacing } from 'components';
import { ChatListHeader, ChatListRow } from 'components/ChatList';

function ChatListPage() {
  return (
    <div>
      <ChatListHeader />
      <ChatListRow
        image={
          <Image src="https://kakao-style.s3.ap-northeast-2.amazonaws.com/gooChanSung.png" alt="iamge" size={56} />
        }
        sender="장만월"
        lastMessage="너 언제오냐"
        unreadMessageCount={0}
        time="12:30"
      />
      <Spacing height={10} />
    </div>
  );
}

export default ChatListPage;
