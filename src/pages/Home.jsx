import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }} className="card">
          <h3>Join focus rooms and study together</h3>
          <p>Start a timer, join others, and track your focus time.</p>
          <Link to="/rooms">
            <button className="btn">Browse Rooms</button>
          </Link>
        </div>

        <div style={{ width: 360 }} className="card">
          <h4>Quick Demo</h4>
          <p>
            Open two tabs to /room/demo to see local sync later (socket
            integration).
          </p>
        </div>
      </div>
    </main>
  );
}
