import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { putChatRoomListunreadCount } from 'handlers/chatRoomList';
import { getChatRoom, putChatRoomUnreadCount } from 'handlers/chatRoom';

function useChatRoom(roomId?: string) {
  const { mutate: updateChatRoomListunreadCount } = useMutation(putChatRoomListunreadCount);
  const { mutate: updateChatRoomUnreadCount } = useMutation(putChatRoomUnreadCount);

  const { data: room } = useQuery(['room', roomId], () => getChatRoom(roomId), {
    enabled: Boolean(roomId),
  });

  useEffect(() => {
    if (roomId && room?.unreadCount) {
      updateChatRoomListunreadCount(roomId);
      updateChatRoomUnreadCount(roomId);
    }
  }, [room?.unreadCount, roomId, updateChatRoomListunreadCount, updateChatRoomUnreadCount]);

  return { room };
}

export default useChatRoom;
