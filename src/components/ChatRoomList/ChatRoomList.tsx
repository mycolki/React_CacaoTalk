import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { getChatRoomList } from 'handlers/chatRoomList';
import { formatLastMessageDate } from 'utils/manipulateDate';
import { chatRoomListItemProfileImageSlide, chatRoomListItemTextSlide } from 'style/animation';
import COLORS from 'style/palette';
import { StyledText4, Text } from 'components/Shared/Texts';
import { Circle, Image } from 'components/Shared';

function ChatRoomList() {
  const naviagte = useNavigate();
  const { data: chatRoomList } = useQuery(['chatRoomList'], getChatRoomList);

  return (
    <List>
      {chatRoomList?.map(
        ({ roomId, lastMessage: { timeStamp, type, text }, otherUser: { name, profileImageUrl }, unreadCount }) => (
          <ListRow key={roomId} onClick={() => naviagte(`/room/${roomId}`)}>
            <ProfileImage src={profileImageUrl} alt={name} size={56} borderRadius="28px" />

            <ChatRoomInfo>
              <Row>
                <OtherUserName>{name}</OtherUserName>
                <LastMessageTime>{formatLastMessageDate(timeStamp)}</LastMessageTime>
              </Row>

              <Row>
                <LastMessage>{type === 'text' ? text : '사진을 보냈습니다.'}</LastMessage>
                {Boolean(unreadCount) && (
                  <Circle size="1.125rem" bgColor="PURPLE" padding="4px 6px">
                    <UnreadCount>{unreadCount}</UnreadCount>
                  </Circle>
                )}
              </Row>
            </ChatRoomInfo>
          </ListRow>
        )
      )}
    </List>
  );
}
export default ChatRoomList;

const List = styled.ul`
  padding-top: 10px;
  list-style: none;
`;

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

const ProfileImage = styled(Image)`
  position: relative;
  left: -20px;
  animation-name: ${chatRoomListItemProfileImageSlide};
  animation-duration: 180ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: 280ms;
`;
const ChatRoomInfo = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  left: -80px;
  animation-name: ${chatRoomListItemTextSlide};
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OtherUserName = styled(StyledText4)`
  display: block;
  margin-bottom: 3px;
  color: ${COLORS.CHARCOAL_GREY};
`;
const LastMessageTime = styled(Text)`
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  letter-spacing: normal;
  text-align: right;
  color: ${COLORS.COOL_GREY};
`;

const LastMessage = styled(Text)`
  width: 230px;
  font-size: 0.813rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${COLORS.COOL_GREY};
`;
const UnreadCount = styled(Text)`
  font-size: 0.625rem;
  letter-spacing: -0.08px;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.WHITE};
`;
