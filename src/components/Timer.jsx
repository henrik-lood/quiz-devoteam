import React, { useEffect } from "react";
export const Timer = ({ timeLeft, setTimeLeft }) => {
  const interval = 1000;

  useEffect(() => {
    if (timeLeft !== 0) {
      const countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, interval);

      return () => clearInterval(countdown);
    }
  }, [timeLeft]);

  return <div>Time left: {timeLeft}</div>;
};
