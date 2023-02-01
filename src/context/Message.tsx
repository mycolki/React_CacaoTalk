import { createContext, ReactNode, useMemo, useState } from 'react';
import { ImageType } from 'types';

interface MessageContextType {
  loading: boolean;
  cacheLocalImage: (image: ImageType) => void;
  removeLocalImageCache: () => void;
  localImage?: ImageType;
}

export const MessageContext = createContext<MessageContextType>({
  loading: false,
  cacheLocalImage: () => {},
  removeLocalImageCache: () => {},
});

export function MessageProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [localImage, setLocalImage] = useState<ImageType | undefined>();

  const value = useMemo(
    () => ({
      loading,
      localImage,
      cacheLocalImage(image: ImageType) {
        setLocalImage(image);
        setLoading(true);
      },
      removeLocalImageCache() {
        setLocalImage(undefined);
        setLoading(false);
      },
    }),
    [localImage, loading]
  );

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
}
