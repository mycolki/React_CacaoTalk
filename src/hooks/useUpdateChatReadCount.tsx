import { putChatReadCount } from 'apis/handlers/chats';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

function useUpdateChatReadCount({ roomId, hasUnreadMessage }: { roomId?: string; hasUnreadMessage: boolean }) {
  const { mutate: updateChatReadCount } = useMutation({ mutationFn: putChatReadCount });

  useEffect(() => {
    if (hasUnreadMessage && roomId) {
      updateChatReadCount(roomId);
    }
  }, [updateChatReadCount, roomId, hasUnreadMessage]);

  return {};
}

export default useUpdateChatReadCount;
