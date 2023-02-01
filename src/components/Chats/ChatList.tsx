import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { getChats } from 'handlers/chats';

import ChatListRow from './ChatListRow';

function ChatList() {
  const { data: chats } = useQuery({
    queryKey: ['chatList'],
    queryFn: getChats,
  });

  return (
    <List>
      {chats?.map(chat => (
        <ChatListRow key={chat.roomId} chat={chat} />
      ))}
    </List>
  );
}
export default ChatList;

const List = styled.li`
  padding-top: 10px;
  list-style: none;
`;
