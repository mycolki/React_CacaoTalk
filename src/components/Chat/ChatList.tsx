import { useQuery } from 'react-query';
import { formatLastMessageDate } from 'utils/formatDate';
import { getChats } from 'handlers/chats';

import Image from 'components/Image';
import ChatListRow from './ChatListRow';

function ChatList() {
  const { data: chats } = useQuery({
    queryKey: ['chatList'],
    queryFn: getChats,
  });

  return (
    <ul>
      {chats?.map(({ roomId, member, lastMessage, unReadCount, lastTimeStamp }) => (
        <ChatListRow
          key={roomId}
          roomId={roomId}
          image={<Image src={member.profileImgUrl} alt="iamge" size={56} borderRadius="28px" />}
          sender={member.name}
          lastMessage={lastMessage}
          unReadCount={unReadCount}
          timeStamp={formatLastMessageDate(lastTimeStamp)}
        />
      ))}
    </ul>
  );
}
export default ChatList;
