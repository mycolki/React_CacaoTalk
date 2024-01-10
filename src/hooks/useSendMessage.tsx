import { useMutation } from 'react-query';
import { ChatRoomListType, MessageType } from 'types';
import queryClient from 'query';
import { postMessage } from 'handlers/chatRoom';
import { putChatRoomListLastMessage } from 'handlers/chatRoomList';

function useSendMessage(roomId: string) {
  const { mutate: updateChatRoomListLastMessage } = useMutation<ChatRoomListType, Error, MessageType>(lastMessage =>
    putChatRoomListLastMessage(roomId, lastMessage)
  );

  const { mutate: sendMessage, mutateAsync: sendMessageAsync } = useMutation<
    MessageType,
    Error,
    Omit<MessageType, 'id' | 'timeStamp'>
  >(message => postMessage(roomId, message), {
    onSuccess: newMessage => {
      queryClient.invalidateQueries(['room', roomId]);
      updateChatRoomListLastMessage(newMessage);
    },
  });

  return { sendMessage, sendMessageAsync };
}

export default useSendMessage;
