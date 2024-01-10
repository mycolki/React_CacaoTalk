import { createContext, ReactNode, useMemo, useState } from 'react';

interface GalleryContextType {
  showingGallery: boolean;
  toggleGallery: () => void;
}

export const GalleryContext = createContext<GalleryContextType>({
  showingGallery: false,
  toggleGallery: () => {},
});

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [showingGallery, setShowingGallery] = useState(false);

  const value = useMemo(
    () => ({
      showingGallery,
      toggleGallery() {
        setShowingGallery(prev => !prev);
      },
    }),
    [showingGallery]
  );

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}
