import { useState, useEffect } from 'react';

export const usePopupTimer = (delay: number = 3000) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('test-series-popup-shown');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const closePopup = () => {
    setShowPopup(false);
    // Mark popup as shown for this session
    sessionStorage.setItem('test-series-popup-shown', 'true');
  };

  return { showPopup, closePopup };
};