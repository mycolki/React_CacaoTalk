import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUser, useRoom } from 'hooks';

import { ChatBody, ChatRoomHeader } from 'components/ChatRoom';
import { Gallery } from 'components';
import { MessageProvider } from 'context/Message';

interface Location {
  state: {
    unReadCount: number;
  };
}

function ChatRoomPage() {
  const [canShowGallery, setCanShowGallery] = useState(false);

  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();
  const { room } = useRoom({ roomId, unReadCount: state.unReadCount });
  const user = useUser();

  if (!roomId || !room) {
    return null;
  }

  return (
    <>
      <ChatRoomHeader sender={room.member.name} onUploadButtonClick={() => setCanShowGallery(prev => !prev)} />
      <MessageProvider>
        {user && canShowGallery && <Gallery roomId={roomId} user={user} />}
        {user && <ChatBody roomId={roomId} messages={room.messages} user={user} />}
      </MessageProvider>
    </>
  );
}

export default ChatRoomPage;
