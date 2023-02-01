import { useEffect, useRef } from 'react';
import { ImageType, MessageType } from 'types';

function useChatsScroll(messages: MessageType[], localImage: ImageType | null) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const talksEl = ref.current;

    if (talksEl) {
      const occuredOverFlowY = ref.current.scrollHeight > ref.current.clientHeight;

      if (occuredOverFlowY) {
        talksEl.scrollTop = talksEl.scrollHeight;
      }
    }
  }, [ref, messages, localImage]);

  return ref;
}

export default useChatsScroll;
