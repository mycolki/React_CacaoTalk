import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { putChatRoomListunreadCount } from 'handlers/chatRoomList';
import { getChatRoom } from 'handlers/chatRoom';

function useChatRoom({ roomId, unreadCount }: { roomId?: string; unreadCount: number }) {
  const { mutate: updateChatRoomListunreadCount } = useMutation(putChatRoomListunreadCount);

  const { data: room } = useQuery(['room', roomId], () => getChatRoom(roomId), {
    enabled: Boolean(roomId),
  });

  useEffect(() => {
    if (unreadCount > 0 && roomId) {
      updateChatRoomListunreadCount(roomId);
    }
  }, [roomId, unreadCount, updateChatRoomListunreadCount]);

  return { room };
}

export default useChatRoom;
