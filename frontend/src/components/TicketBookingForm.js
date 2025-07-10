import React, { useState } from "react";
import axios from "axios";

export default function TicketBookingForm({ users, onTicketBooked }) {
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
    <div>
      <h2>Book Flight Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Passenger Name
          <select name="passengerName" value={ticket.passengerName} onChange={handleChange} required>
            <option value="">Select User</option>
            {users.map(u => (
              <option key={u.id} value={`${u.firstName} ${u.lastName}`}>
                {u.firstName} {u.lastName}
              </option>
            ))}
          </select>
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
      {message && <p>{message}</p>}
    </div>
  );
}
