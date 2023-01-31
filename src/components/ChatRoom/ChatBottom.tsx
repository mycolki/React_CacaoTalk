import { useMutation } from 'react-query';
import styled from '@emotion/styled';
import { postMessage } from 'handlers/rooms';
import { putLastMessage } from 'handlers/chats';
import { Chat, Member, Message } from 'types';
import queryClient from 'query';

import MessageForm from 'components/MessageForm';

function ChatBottom({ roomId, user }: { roomId: string; user: Member }) {
  const { mutate: updateLastMessage } = useMutation<Chat[], Error, Message>({
    mutationFn: lastMessage => putLastMessage(roomId, lastMessage),
  });

  const { mutate: sendMessage } = useMutation<Message, Error, Omit<Message, 'id' | 'timeStamp'>>({
    mutationFn: message => postMessage(roomId, message),
    onSuccess: newMessage => {
      queryClient.invalidateQueries(['room', roomId]);
      updateLastMessage(newMessage);
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
