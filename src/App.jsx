import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import CardSection from "./pages/CardSection";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cardSection" element={<CardSection />} />
    </Routes>
  );
}
