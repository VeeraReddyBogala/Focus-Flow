import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2 style={{ margin: 0 }}>FocusFlow</h2>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
