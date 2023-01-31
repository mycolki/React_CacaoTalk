import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { Member, Message } from 'types';

import ChatBottom from './ChatBottom';
import ChatMessages from './ChatMessages';

interface ChatBodyProps {
  messages: Message[];
  user: Member;
  roomId: string;
}

function ChatBody({ messages, roomId, user }: ChatBodyProps) {
  return (
    <Container>
      <ChatMessages messages={messages} user={user} />
      <ChatBottom roomId={roomId} user={user} />
    </Container>
  );
}

export default ChatBody;

const Container = styled.div`
  background-color: ${COLORS.PALE_GREY};
`;
