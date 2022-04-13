import React, { useEffect } from "react";
import styles from "./Timer.module.css";

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

  return <div className={styles.timer}>Time left: {timeLeft}</div>;
};
