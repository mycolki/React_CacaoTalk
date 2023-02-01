import { useContext, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Member, Message } from 'types';
import { MessageContext } from 'context/Message';
import { isSameMinute, isStartOfDay } from 'utils/manipulateDate';
import COLORS from 'style/palette';

import ImageMessage from 'components/ImageMessage';
import MessageRow from 'components/MessageRow';
import ChatMessage from './ChatMessage';

function ChatMessages({ messages, user }: { messages: Message[]; user: Member }) {
  const { loading, localImage } = useContext(MessageContext);

  const messagesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const messagesEl = messagesRef.current;

    if (messagesEl) {
      const occuredOverFlowY = messagesRef.current.scrollHeight > messagesRef.current.clientHeight;

      if (occuredOverFlowY) {
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
    }
  }, [messagesRef, messages, localImage]);

  return (
    <Messages ref={messagesRef}>
      {messages.map((message, i, originMessages) => (
        <ChatMessage
          key={message.id}
          message={message}
          isUser={Boolean(message.sender.id === user.id)}
          isStartOfDay={isStartOfDay(message.timeStamp, originMessages[i - 1]?.timeStamp)}
          isSameMinute={isSameMinute(message.timeStamp, originMessages[i + 1]?.timeStamp)}
        />
      ))}
      {loading && localImage && (
        <MessageRow align="right">
          <ImageMessage loading image={localImage} />
        </MessageRow>
      )}
    </Messages>
  );
}

export default ChatMessages;

const Messages = styled.ul`
  /* max-height: calc(100% - var(--bottom-message-form)); */
  /* height: calc((var(--app-height) - var(--header) - var(--bottom-message-form))); */
  padding: 20px 16px 0 16px;
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
