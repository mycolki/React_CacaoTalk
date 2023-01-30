import { ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from 'components/Text';
import Circle from 'components/Circle';
import { useNavigate } from 'react-router-dom';

interface ChatListRowProps {
  roomId: string;
  image: ReactNode;
  sender: ReactNode;
  lastMessage: string;
  unReadCount: number;
  timeStamp: string;
}

function ChatListRow({ roomId, image: imageColumn, sender, lastMessage, unReadCount, timeStamp }: ChatListRowProps) {
  const naviagte = useNavigate();
  return (
    <ListRow
      onClick={() =>
        naviagte(`/room/${roomId}`, {
          state: {
            hasUnreadMessage: !!unReadCount,
          },
        })
      }
    >
      {imageColumn}

      <MessageColumn>
        <SenderText textStyle="textStyle4" color="CHARCOAL_GREY">
          {sender}
        </SenderText>
        <LastMessageText color="COOL_GREY">{lastMessage}</LastMessageText>
      </MessageColumn>

      <TimeColumn>
        <TimeText color="CHARCOAL_GREY2">{timeStamp}</TimeText>
        {unReadCount > 0 && (
          <Circle size="1.125rem" bgColor="PURPLE" padding="4px 6px">
            <UnReadCountText color="WHITE">{unReadCount}</UnReadCountText>
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
  gap: 0.375rem;
`;

const TimeText = styled(Text)`
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  white-space: nowrap;
`;

const UnReadCountText = styled(Text)`
  font-size: 0.625rem;
  letter-spacing: -0.08px;
`;
