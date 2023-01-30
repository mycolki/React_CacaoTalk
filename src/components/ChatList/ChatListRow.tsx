import { ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from 'components/Text';
import Circle from 'components/Circle';

interface ChatListRowProps {
  image: ReactNode;
  sender: ReactNode;
  lastMessage: string;
  unreadMessageCount: number;
  timeStamp: string;
}

function ChatListRow({ image: imageColumn, sender, lastMessage, unreadMessageCount, timeStamp }: ChatListRowProps) {
  return (
    <ListRow>
      {imageColumn}

      <MessageColumn>
        <SenderText textStyle="textStyle4" color="CHARCOAL_GREY">
          {sender}
        </SenderText>
        <LastMessageText color="COOL_GREY">{lastMessage}</LastMessageText>
      </MessageColumn>

      <TimeColumn>
        <TimeText color="CHARCOAL_GREY2">{timeStamp}</TimeText>
        {unreadMessageCount > 0 && (
          <Circle size="1.125rem" bgColor="PURPLE" padding="4px 6px">
            <UnreadMessageCountText color="WHITE">{unreadMessageCount}</UnreadMessageCountText>
          </Circle>
        )}
      </TimeColumn>
    </ListRow>
  );
}

export default ChatListRow;

const ListRow = styled.li`
  display: flex;
  align-items: center;
  height: 74px;
  padding: 9px 16px;
  gap: 16px;
  list-style: none;
  background-color: ${COLORS.WHITE};
`;

const MessageColumn = styled.div`
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SenderText = styled(Text)`
  display: block;
  margin-bottom: 3px;
`;

const LastMessageText = styled(Text)`
  font-size: 0.813rem;
  font-weight: 500;
  letter-spacing: -0.1px;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29px;
  gap: 0.375rem;
`;

const TimeText = styled(Text)`
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
`;

const UnreadMessageCountText = styled(Text)`
  font-size: 0.625rem;
  letter-spacing: -0.08px;
`;
