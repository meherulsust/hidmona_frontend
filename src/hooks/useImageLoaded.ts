import { useState, useEffect, useRef } from 'react';

export const useImageLoaded = (src: string | undefined) => {
  const isMounted = useRef(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    const image = new Image();
    image.src = src;

    image.onload = () => {
      if (isMounted.current) {
        setIsLoaded(true);
      }
    };

    image.onerror = () => {
      if (isMounted.current) {
        setIsLoaded(false);
      }
    };
  }, [src]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isLoaded;
};
