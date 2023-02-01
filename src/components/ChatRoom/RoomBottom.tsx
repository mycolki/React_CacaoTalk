import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { useSendMessage } from 'hooks';
import { Member } from 'types';

import MessageForm from 'components/MessageForm';

function RoomBottom({ roomId, user }: { roomId: string; user: Member }) {
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

export default RoomBottom;

const Wrapper = styled.div`
  height: var(--bottom-message-form);
  background-color: ${COLORS.PALE_GREY};
`;
