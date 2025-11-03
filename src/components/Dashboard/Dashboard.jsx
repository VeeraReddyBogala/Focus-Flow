import React from "react";
import FocusChart from "./FocusChart";

export default function Dashboard() {
  // mock data for now
  return (
    <div>
      <h3>Your Focus Dashboard</h3>
      <div className="card">
        <h4>Weekly Focus</h4>
        <FocusChart />
      </div>
    </div>
  );
}
