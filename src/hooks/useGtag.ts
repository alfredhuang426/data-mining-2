import { useEffect, useState } from 'react';

interface UseGtagReturn {
  isGtagLoaded: boolean;
}

export const useGtag = (): UseGtagReturn => {
  const [isGtagLoaded, setIsGtagLoaded] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 5; // 5秒  = 5 * 100ms

    const checkGtagLoaded = () => {
      attempts++;
      
      if (typeof window !== 'undefined' && window.gtag) {
        setIsGtagLoaded(true);
        console.log('gtag 已載入');
        return;
      } else {
        console.log('gtag 還沒載入');
      }
      if (attempts >= maxAttempts) {
        console.warn('gtag 載入超時，5秒後放棄');
        setIsGtagLoaded(false);
        return;
      }
      
      setTimeout(checkGtagLoaded, 100);
    };

    checkGtagLoaded();
  }, []);

  return {
    isGtagLoaded,
  };
};
