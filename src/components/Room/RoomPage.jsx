import React from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import MembersList from "./MembersList";
import ChatPanel from "./ChatPanel";

export default function RoomPage() {
  const { id } = useParams();

  return (
    <div className="grid">
      <div>
        <div className="card">
          <h3>Room: {id}</h3>
          <Timer roomId={id} />
        </div>

        <div style={{ marginTop: 16 }} className="card">
          <ChatPanel roomId={id} />
        </div>
      </div>

      <aside>
        <div className="card">
          <h4>Active members</h4>
          <MembersList roomId={id} />
        </div>
        <div style={{ marginTop: 12 }} className="card">
          <h4>Room info</h4>
          <p>Pomodoro: 25 min focus / 5 min break (customizable)</p>
        </div>
      </aside>
    </div>
  );
}
