import { createContext, ReactNode, useMemo, useState } from 'react';
import { ImageType } from 'types';

interface TalkContextType {
  loading: boolean;
  cacheLocalImage: (image: ImageType) => void;
  removeLocalImageCache: () => void;
  localImage?: ImageType;
  showingGallery: boolean;
  toggleGallery: () => void;
}

export const TalkContext = createContext<TalkContextType>({
  loading: false,
  cacheLocalImage: () => {},
  removeLocalImageCache: () => {},
  showingGallery: false,
  toggleGallery: () => {},
});

export function TalkProvider({ children }: { children: ReactNode }) {
  const [showingGallery, setShowingGallery] = useState(false);
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
      showingGallery,
      toggleGallery() {
        setShowingGallery(prev => !prev);
      },
    }),
    [loading, localImage, showingGallery]
  );

  return <TalkContext.Provider value={value}>{children}</TalkContext.Provider>;
}
