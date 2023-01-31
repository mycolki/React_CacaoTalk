import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { putReadCount } from 'handlers/chats';
import { getRoom } from 'handlers/rooms';
import { formatDate } from 'utils/formatDate';

function useRoom({ roomId, unReadCount }: { roomId?: string; unReadCount: boolean }) {
  const { mutate: updateReadCount } = useMutation({ mutationFn: putReadCount });

  const { data: room } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => getRoom(roomId),
    enabled: Boolean(roomId),
    select: data => ({
      ...data,
      messages: data.messages.map(message => ({
        ...message,
        timeStamp: formatDate(message.timeStamp, 'HH:mm'),
      })),
    }),
  });

  useEffect(() => {
    if (unReadCount && roomId) {
      updateReadCount(roomId);
    }
  }, [roomId, unReadCount, updateReadCount]);

  return { room };
}

export default useRoom;
