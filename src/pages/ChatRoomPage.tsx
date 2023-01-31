import { useLocation, useParams } from 'react-router-dom';
import { useUser, useRoom } from 'hooks';

import { ChatBody, ChatRoomHeader } from 'components/ChatRoom';
import { Gallery } from 'components';
import { Image } from 'types';
import { useState } from 'react';

interface Location {
  state: {
    unReadCount: number;
  };
}

function ChatRoomPage() {
  const { state } = useLocation() as Location;
  const { roomId } = useParams<{ roomId: string }>();
  const { room } = useRoom({ roomId, unReadCount: state.unReadCount });
  const user = useUser();

  const [canShowGallery, setCanShowGallery] = useState(false);

  if (!roomId || !room) {
    return null;
  }

  return (
    <>
      <ChatRoomHeader sender={room.member.name} onUploadButtonClick={() => setCanShowGallery(prev => !prev)} />
      {canShowGallery && <Gallery images={images} onClick={() => {}} />}
      {user && <ChatBody roomId={roomId} messages={room.messages} user={user} />}
    </>
  );
}

export default ChatRoomPage;

const images: Image[] = [
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
  {
    imgUrl: 'https://kakao-style.s3.ap-northeast-2.amazonaws.com/janFullMoon.png',
    description: '그림1',
  },
];
