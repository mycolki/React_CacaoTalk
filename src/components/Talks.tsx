import { forwardRef, PropsWithChildren, Ref } from 'react';
import styled from '@emotion/styled';
import { Member, Message } from 'types';
import { isSameMinute, isStartOfDay } from 'utils/manipulateDate';
import COLORS from 'style/palette';

import Talk from './Talk';

interface TalksProps {
  messages: Message[];
  user: Member;
}

function Talks({ messages, user, children }: PropsWithChildren<TalksProps>, ref: Ref<HTMLUListElement>) {
  return (
    <TalkList ref={ref}>
      {messages.map((message, i, originMessages) => (
        <Talk
          key={message.id}
          message={message}
          isUser={Boolean(message.sender.id === user.id)}
          isStartOfDay={isStartOfDay(message.timeStamp, originMessages[i - 1]?.timeStamp)}
          isSameMinute={isSameMinute(message.timeStamp, originMessages[i + 1]?.timeStamp)}
        />
      ))}
      {children}
    </TalkList>
  );
}

export default forwardRef(Talks);

const TalkList = styled.ul`
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
