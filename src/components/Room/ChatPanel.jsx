import React from "react";

export default function ChatPanel({ roomId }) {
  return (
    <div>
      <div
        style={{
          height: 220,
          overflow: "auto",
          border: "1px solid #f0f0f0",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <p style={{ margin: 0 }}>— Chat messages will appear here —</p>
      </div>
      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          placeholder="Say something encouraging..."
        />
        <button className="btn">Send</button>
      </div>
    </div>
  );
}
