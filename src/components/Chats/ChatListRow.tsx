import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { formatLastMessageDate } from 'utils/manipulateDate';
import { Chat } from 'types';

import Circle from 'components/Circle';
import Image from 'components/Image';
import { Text, StyledText4 } from 'components/TextField';
import { slideChatProfile, slideChatText } from 'style/animation';

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
      <ImageArea src={member.profileImageUrl} alt={member.name} size={56} borderRadius="28px" />

      <TextArea>
        <Row>
          <MemberText color="CHARCOAL_GREY">{member.name}</MemberText>
          <TimeText color="CHARCOAL_GREY2">{formatLastMessageDate(lastMessage.timeStamp)}</TimeText>
        </Row>

        <Row>
          <LastMessageText color="COOL_GREY">
            {lastMessage.type === 'text' ? lastMessage.text : '사진을 보냈습니다.'}
          </LastMessageText>
          {unReadCount > 0 && (
            <Circle size="1.125rem" bgColor="PURPLE" padding="4px 6px">
              <UnReadCountText color="WHITE">{unReadCount}</UnReadCountText>
            </Circle>
          )}
        </Row>
      </TextArea>
    </ListRow>
  );
}

export default ChatListRow;

const ListRow = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: center;
  height: 74px;
  padding: 9px 16px;
  gap: 16px;
  list-style: none;
  background-color: ${COLORS.WHITE};
`;

const ImageArea = styled(Image)`
  position: relative;
  left: -20px;
  animation-name: ${slideChatProfile};
  animation-duration: 200ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: 200ms;
`;

const TextArea = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  left: -80px;
  animation-name: ${slideChatText};
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MemberText = styled(StyledText4)`
  display: block;
  margin-bottom: 3px;
`;
const TimeText = styled(Text)`
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
`;

const LastMessageText = styled(Text)`
  width: 230px;
  font-size: 0.813rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const UnReadCountText = styled(Text)`
  font-size: 0.625rem;
  letter-spacing: -0.08px;
  font-weight: bold;
  text-align: center;
`;
