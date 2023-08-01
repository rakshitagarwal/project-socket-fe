import { useState, useEffect } from "react";

export const useTimerHooks = () => {
  const [countDown, setCountDown] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if (countDown < 0) {
      //TODO just for demo when we integrate with the backend we solve this
      setCountDown(10);
      // setisBuyNowShow(false);
    }
    return () => clearInterval(interval);
  }, [countDown]);

  return { countDown, setCountDown };
};
