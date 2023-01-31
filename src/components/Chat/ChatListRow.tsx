import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { formatLastMessageDate } from 'utils/manipulateDate';
import { Chat } from 'types';

import Text from 'components/Text';
import Circle from 'components/Circle';
import Image from 'components/Image';

interface ChatListRowProps {
  chat: Chat;
}

function ChatListRow({ chat: { roomId, member, lastMessage, unReadCount } }: ChatListRowProps) {
  const naviagte = useNavigate();

  return (
    <ListRow
      onClick={() =>
        naviagte(`/room/${roomId}`, {
          state: {
            unReadCount,
          },
        })
      }
    >
      <Image src={member.profileImgUrl} alt={member.name} size={56} borderRadius="28px" />
      <MessageColumn>
        <MemberText textStyle="textStyle4" color="CHARCOAL_GREY">
          {member.name}
        </MemberText>
        <LastMessageText color="COOL_GREY">
          {lastMessage.type === 'text' ? lastMessage.text : '사진을 보냈습니다.'}
        </LastMessageText>
      </MessageColumn>

      <TimeColumn>
        <TimeText color="CHARCOAL_GREY2">{formatLastMessageDate(lastMessage.timeStamp)}</TimeText>
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

const MemberText = styled(Text)`
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
