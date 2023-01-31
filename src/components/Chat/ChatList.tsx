import { useQuery } from 'react-query';

import { getChats } from 'handlers/chats';

import ChatListRow from './ChatListRow';

function ChatList() {
  const { data: chats } = useQuery({
    queryKey: ['chatList'],
    queryFn: getChats,
  });

  return (
    <ul>
      {chats?.map(chat => (
        <ChatListRow key={chat.roomId} chat={chat} />
      ))}
    </ul>
  );
}
export default ChatList;
