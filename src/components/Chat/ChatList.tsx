import { useQuery } from 'react-query';
import getChats from 'apis/handlers/chats';
import { formatLastMessageDate } from 'utils/formatDate';

import Image from 'components/Image';
import ChatListRow from './ChatListRow';

function ChatList() {
  const { data: chats } = useQuery({
    queryKey: ['chatList'],
    queryFn: getChats,
  });

  return (
    <ul>
      {chats?.map(({ roomId, member, lastMessage, unReadMessageCount, lastTimeStamp }) => (
        <ChatListRow
          key={roomId}
          image={<Image src={member.profileImgUrl} alt="iamge" size={56} borderRadius="28px" />}
          sender={member.name}
          lastMessage={lastMessage}
          unreadMessageCount={unReadMessageCount}
          timeStamp={formatLastMessageDate(lastTimeStamp)}
        />
      ))}
    </ul>
  );
}
export default ChatList;
