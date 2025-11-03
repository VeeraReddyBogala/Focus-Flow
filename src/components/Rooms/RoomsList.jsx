import React from "react";
import { Link } from "react-router-dom";

const SAMPLE = [
  { id: "demo", name: "Evening Study", members: 3 },
  { id: "morning", name: "Morning Coding", members: 1 },
];

export default function RoomsList() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {SAMPLE.map((r) => (
        <div
          key={r.id}
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h4 style={{ margin: "0 0 6px 0" }}>{r.name}</h4>
            <small>{r.members} active</small>
          </div>
          <Link to={`/room/${r.id}`}>
            <button className="btn">Join</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
