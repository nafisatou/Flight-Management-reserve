import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchTickets from "./components/SearchTickets";
import TicketList from "./components/TicketList";
import TicketBookingForm from "./components/TicketBookingForm";

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/book">Book Ticket</Link>
        <Link to="/search">Search Tickets</Link>
        <Link to="/list">List Tickets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<TicketBookingForm />} />
        <Route path="/search" element={<SearchTickets />} />
        <Route path="/list" element={<TicketList />} />
        {/* Register route removed but file still exists for safety */}
      </Routes>
    </Router>
  );
}

export default App;
