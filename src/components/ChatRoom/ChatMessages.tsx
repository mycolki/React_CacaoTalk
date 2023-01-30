import { useQuery } from 'react-query';
import { getRoom } from 'handlers';

function ChatMessages({ roomId }: { roomId: string }) {
  const { data } = useQuery({ queryKey: ['room', roomId], queryFn: () => getRoom(roomId) });

  return <ul>dd</ul>;
}

export default ChatMessages;
