import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { useSendMessage } from 'hooks';
import { Member } from 'types';

import MessageForm from 'components/MessageForm';

function ChatBottom({ roomId, user }: { roomId: string; user: Member }) {
  const { sendMessage } = useSendMessage(roomId);

  return (
    <Wrapper>
      <MessageForm
        onSubmit={(text: string) => {
          sendMessage({
            type: 'text',
            text,
            sender: user,
          });
        }}
      />
    </Wrapper>
  );
}

export default ChatBottom;

const Wrapper = styled.div`
  position: fixed;
  width: var(--app-width);
  bottom: 0;
  background-color: ${COLORS.PALE_GREY};
`;
