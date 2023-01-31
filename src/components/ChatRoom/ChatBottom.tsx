import { useMutation } from 'react-query';
import styled from '@emotion/styled';
import { postMessage } from 'handlers/rooms';
import { Member, Message, Room } from 'types';
import queryClient from 'query';

import MessageForm from 'components/MessageForm';

function ChatBottom({ roomId, user }: { roomId: string; user: Member }) {
  const { mutate: sendMessage } = useMutation<Room, Error, Omit<Message, 'id' | 'timeStamp'>>({
    mutationFn: message => postMessage(roomId, message),
    onSuccess: room => {
      queryClient.setQueryData(['room', roomId], room);
    },
  });

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
`;
