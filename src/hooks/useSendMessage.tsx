import { useMutation } from 'react-query';
import { postMessage } from 'handlers/rooms';
import { putLastMessage } from 'handlers/chats';
import { Chat, Message } from 'types';
import queryClient from 'query';

function useSendMessage(roomId: string) {
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

  return sendMessage;
}

export default useSendMessage;
