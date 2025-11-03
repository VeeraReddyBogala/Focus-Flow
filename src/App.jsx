import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomPage from "./components/Room/RoomPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Common/Header";
import Layout from "./components/Common/Layout";

export default function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}
