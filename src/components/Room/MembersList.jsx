import React from "react";

export default function MembersList({ roomId }) {
  // mock data for now
  const members = [
    { id: 1, name: "Alice", avatar: "" },
    { id: 2, name: "Bob", avatar: "" },
  ];

  return (
    <div>
      {members.map((m) => (
        <div
          key={m.id}
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "#e6eefc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {m.name[0]}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{m.name}</div>
            <small>Studying • 12m</small>
          </div>
        </div>
      ))}
    </div>
  );
}
