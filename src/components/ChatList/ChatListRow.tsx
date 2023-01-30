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
  time: string;
}

function ChatListRow({ image, sender, lastMessage, unreadMessageCount, time }: ChatListRowProps) {
  return (
    <ListRow>
      <ProfileImageColumn>{image}</ProfileImageColumn>
      <MessageColumn>
        <Text textStyle="textStyle4" style={{ display: 'block', marginBottom: '3px' }}>
          {sender}
        </Text>
        <Text
          style={{
            fontSize: '0.813rem',
            fontWeight: '500',
            letterSpacing: '-0.1px',
            color: COLORS.COOL_GREY,
          }}
        >
          {lastMessage}
        </Text>
      </MessageColumn>
      <TimeColumn>
        <Text
          style={{
            opacity: '0.4',
            fontSize: '0.688rem',
            fontWeight: '500',
            letterSpacing: 'normal',
            textAlign: 'right',
            color: COLORS.CHARCOAL_GREY2,
          }}
        >
          {time}
        </Text>
        <Circle size="1.125rem" bgColor="PURPLE" padding="4px 6px">
          <Text
            color="WHITE"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '-0.08px',
            }}
          >
            {unreadMessageCount}
          </Text>
        </Circle>
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

const ProfileImageColumn = styled.div``;

const MessageColumn = styled.div`
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29px;
  gap: 0.375rem;
`;
