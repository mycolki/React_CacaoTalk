import { useContext } from 'react';
import styled from '@emotion/styled';
import { Member, Message } from 'types';
import { TalkContext } from 'context/Talk';
import COLORS from 'style/palette';
import { useTalksScroll } from 'hooks';

import ImageMessage from 'components/ImageMessage';
import TalkLayout from 'components/TalkLayout';
import Talks from 'components/Talks';
import Gallery from 'components/Gallery';

interface RoomBodyProps {
  messages: Message[];
  user: Member;
  roomId: string;
}

function RoomBody({ messages, user, roomId }: RoomBodyProps) {
  const { loading, localImage, showingGallery } = useContext(TalkContext);
  const ref = useTalksScroll(messages, localImage);

  return (
    <Body>
      {showingGallery && <Gallery roomId={roomId} user={user} />}

      <Talks
        ref={ref}
        messages={messages}
        user={user}
        lastTalk={
          loading &&
          localImage && (
            <TalkLayout align="right">
              <ImageMessage loading image={localImage} />
            </TalkLayout>
          )
        }
      />
    </Body>
  );
}

export default RoomBody;

const Body = styled.div`
  height: calc(100% - var(--header) - var(--bottom-message-form));
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: ${COLORS.PALE_GREY};
`;
