import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { putReadCount } from 'handlers/chats';
import { getRoom } from 'handlers/rooms';

function useRoom({ roomId, unReadCount }: { roomId?: string; unReadCount: boolean }) {
  const { mutate: updateReadCount } = useMutation({ mutationFn: putReadCount });

  const { data: room } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoom(roomId),
    enabled: Boolean(roomId),
  });

  useEffect(() => {
    if (unReadCount && roomId) {
      updateReadCount(roomId);
    }
  }, [roomId, unReadCount, updateReadCount]);

  return { room };
}

export default useRoom;
