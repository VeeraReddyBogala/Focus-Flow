import { useState, useEffect, useRef } from "react";

/**
 * useTimer handles a Pomodoro style timer with start/pause/reset.
 * It exposes current time, running state, and control functions.
 */
export default function useTimer(initialSeconds = 25 * 60) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = (secs = initialSeconds) => {
    setRunning(false);
    setSecondsLeft(secs);
  };

  const format = (s) => {
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return { secondsLeft, running, start, pause, reset, format, setSecondsLeft };
}
