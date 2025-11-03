import React, { useEffect } from "react";
import useTimer from "../../hooks/useTimer";

export default function Timer({ roomId }) {
  // initial 25 minutes
  const { secondsLeft, running, start, pause, reset, format, setSecondsLeft } =
    useTimer(25 * 60);

  // Example: if you want to integrate with sockets later,
  // expose a function to setSecondsLeft from socket events.
  useEffect(() => {
    // placeholder: subscribe to socket events
    // socket.on("sync-timer", (data) => setSecondsLeft(data.seconds));
    return () => {
      // cleanup socket listeners
    };
  }, [roomId, setSecondsLeft]);

  return (
    <div className="timer">
      <div className="time">{format(secondsLeft)}</div>

      <div style={{ display: "flex", gap: 8 }}>
        {!running ? (
          <button className="btn" onClick={start}>
            Start
          </button>
        ) : (
          <button className="btn secondary" onClick={pause}>
            Pause
          </button>
        )}
        <button className="btn secondary" onClick={() => reset(25 * 60)}>
          Reset
        </button>
      </div>

      <small>
        Room ID: <code>{roomId}</code>
      </small>
      <p style={{ marginTop: 12 }}>
        Tip: open another tab and join same room to test multi-tab behaviour
        once sockets are connected.
      </p>
    </div>
  );
}
