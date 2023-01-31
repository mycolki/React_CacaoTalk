import styled from '@emotion/styled';
import { Member, Message } from 'types';
import { isSameMinute, isStartOfDay } from 'utils/manipulateDate';

import ChatMessage from './ChatMessage';

function ChatMessages({ messages, user }: { messages: Message[]; user: Member }) {
  return (
    <Messages>
      {messages.map((message, i, originMessages) => (
        <ChatMessage
          message={message}
          isUser={Boolean(message.sender.id === user.id)}
          isStartOfDay={isStartOfDay(message.timeStamp, originMessages[i - 1]?.timeStamp)}
          isSameMinute={isSameMinute(message.timeStamp, originMessages[i + 1]?.timeStamp)}
        />
      ))}
    </Messages>
  );
}

export default ChatMessages;

const Messages = styled.ul`
  padding: 20px 16px;
`;
