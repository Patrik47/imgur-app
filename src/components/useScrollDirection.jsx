import { useState, useEffect } from 'react';

export default function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);

  const updateScrollDirection = () => {
    if (window.scrollY !== 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [isHidden]);

  return isHidden;
}
