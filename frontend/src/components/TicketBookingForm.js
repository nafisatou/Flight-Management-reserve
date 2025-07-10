import React, { useState } from "react";
import axios from "axios";

export default function TicketBookingForm({ onTicketBooked }) {
  const [ticket, setTicket] = useState({
    bookingDate: "",
    destinationAddress: "",
    kickoffAddress: "",
    passengerName: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://10.180.90.39:30081/api/flights/book", ticket);
      setMessage(`Ticket booked successfully for ${res.data.passengerName}!`);
      setTicket({
        bookingDate: "",
        destinationAddress: "",
        kickoffAddress: "",
        passengerName: "",
      });
      if (onTicketBooked) onTicketBooked(res.data);
    } catch (err) {
      setMessage("Booking failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Book Flight Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Passenger Name
          <input
            type="text"
            name="passengerName"
            value={ticket.passengerName}
            onChange={handleChange}
            placeholder="Enter passenger name"
            required
          />
        </label>
        <label>
          Booking Date
          <input
            type="date"
            name="bookingDate"
            value={ticket.bookingDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Destination Address
          <input
            type="text"
            name="destinationAddress"
            value={ticket.destinationAddress}
            onChange={handleChange}
            placeholder="Where are you flying to?"
            required
          />
        </label>
        <label>
          Kickoff Address
          <input
            type="text"
            name="kickoffAddress"
            value={ticket.kickoffAddress}
            onChange={handleChange}
            placeholder="Departure location"
            required
          />
        </label>
        <button type="submit">Book Ticket</button>
      </form>
      {message && <p style={{ marginTop: "20px", textAlign: "center", color: "#006400" }}>{message}</p>}
    </div>
  );
}
