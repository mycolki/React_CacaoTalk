import styled from '@emotion/styled';
import { Member, Message } from 'types';
import { isStartOfDay } from 'utils/manipulateDate';

import ChatMessage from './ChatMessage';

function ChatMessages({ messages, user }: { messages: Message[]; user: Member }) {
  return (
    <Messages>
      {messages.map((message, i, originMessages) => (
        <ChatMessage
          message={message}
          isUser={Boolean(message.sender.id === user.id)}
          isStartMessageOfDay={isStartOfDay(message.timeStamp, originMessages[i - 1]?.timeStamp)}
        />
      ))}
    </Messages>
  );
}

export default ChatMessages;

const Messages = styled.ul`
  padding: 20px 16px;
`;
