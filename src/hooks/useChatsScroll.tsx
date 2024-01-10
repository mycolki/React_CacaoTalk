import { useEffect, useRef } from 'react';
import { ImageType, MessageType } from 'types';

function useChatsScroll(messages: MessageType[], localImage: ImageType | null) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const chatsEl = ref.current;

    if (chatsEl) {
      const occuredOverFlowY = ref.current.scrollHeight > ref.current.clientHeight;

      if (occuredOverFlowY) {
        chatsEl.scrollTop = chatsEl.scrollHeight;
      }
    }
  }, [ref, messages, localImage]);

  return ref;
}

export default useChatsScroll;
