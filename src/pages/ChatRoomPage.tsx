import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUser, useRoom } from 'hooks';

import { ChatBottom, ChatMessages, ChatRoomHeader as Header } from 'components/ChatRoom';
import styled from '@emotion/styled';
import { MessageProvider } from 'context/Message';
import { Gallery } from 'components';
import COLORS from 'style/palette';

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
    <Container>
      <Header sender={room.member.name} onUploadButtonClick={() => setCanShowGallery(prev => !prev)} />

      {user && (
        <>
          <MessageProvider>
            <MessageContainer>
              {canShowGallery && <Gallery roomId={roomId} user={user} />}
              <ChatMessages messages={room.messages} user={user} />
            </MessageContainer>
          </MessageProvider>
          <ChatBottom roomId={roomId} user={user} />
        </>
      )}
    </Container>
  );
}

export default ChatRoomPage;

const Container = styled.div`
  height: 100%;
`;

const MessageContainer = styled.div`
  height: calc(100% - var(--header) - var(--bottom-message-form));
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: ${COLORS.PALE_GREY};
`;
