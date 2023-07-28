import { useState, useEffect } from 'react';
// import MainPage from '../MainPage';

export default function useScrollDirection(MainPage) {
  const [isHidden, setIsHidden] = useState(false);

  const updateScrollDirection = () => {
    console.log(window.scrollY);
    if (window.scrollY > 10) {
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

  return <MainPage hidden={isHidden} />;
}
