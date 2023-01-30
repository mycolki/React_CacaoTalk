import styled from '@emotion/styled';
import getChats from 'apis/handlers/chats';
import { Image, Spacing } from 'components';
import { ChatListHeader, ChatListRow } from 'components/ChatList';
import { useQuery } from 'react-query';
import COLORS from 'style/palette';
import { formatDateToLocale } from 'utils/formatDate';

function ChatListPage() {
  const { data: chats } = useQuery({
    queryKey: ['chatList'],
    queryFn: getChats,
  });

  return (
    <Container>
      <ChatListHeader />
      <Spacing height={10} />

      {chats?.map(({ roomId, member, lastMessage, unReadMessageCount, lastTimeStamp }) => (
        <ChatListRow
          key={roomId}
          image={<Image src={member.profileImgUrl} alt="iamge" size={56} borderRadius="28px" />}
          sender={member.name}
          lastMessage={lastMessage}
          unreadMessageCount={unReadMessageCount}
          timeStamp={formatDateToLocale(lastTimeStamp, 'HH:mm')}
        />
      ))}
    </Container>
  );
}

export default ChatListPage;

const Container = styled.div`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;
