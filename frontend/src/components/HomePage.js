// frontend/src/components/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TicketStyles.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to Nafi Flight Reservation</h2>
      <p>Select an action:</p>
      <div className="button-group">
        <button onClick={() => navigate("/book")}>✈️ Book a Ticket</button>
        <button onClick={() => navigate("/search")}>🔍 Search Ticket</button>
        <button onClick={() => navigate("/list")}>📃 List All Tickets</button>
      </div>
    </div>
  );
}

export default HomePage;
