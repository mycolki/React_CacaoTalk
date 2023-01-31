import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import COLORS from 'style/palette';
import { Member, Message } from 'types';
import { isSameMinute, isStartOfDay } from 'utils/manipulateDate';

import ChatMessage from './ChatMessage';

function ChatMessages({ messages, user }: { messages: Message[]; user: Member }) {
  const messagesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const messagesEl = messagesRef.current;

    if (messagesEl) {
      const occuredOverFlowY = messagesRef.current.scrollHeight > messagesRef.current.clientHeight;

      if (occuredOverFlowY) {
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
    }
  }, [messagesRef]);

  return (
    <Messages ref={messagesRef}>
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
  height: calc((var(--app-height) - var(--header) - var(--bottom-message-form)));
  padding: 20px 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.COOL_GREY};
    }
  }
`;
