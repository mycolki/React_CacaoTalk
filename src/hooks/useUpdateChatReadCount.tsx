import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { updateChatReadCount } from 'handlers';

function useUpdateChatReadCount({ roomId, hasUnreadMessage }: { roomId?: string; hasUnreadMessage: boolean }) {
  const { mutate } = useMutation({ mutationFn: updateChatReadCount });

  useEffect(() => {
    if (hasUnreadMessage && roomId) {
      mutate(roomId);
    }
  }, [mutate, roomId, hasUnreadMessage]);

  return {};
}

export default useUpdateChatReadCount;
