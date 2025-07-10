import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FlightReservationForm() {
  const [users, setUsers] = useState([]);
  const [ticket, setTicket] = useState({ passengerName: "", kickoffAddress: "", destinationAddress: "", bookingDate: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://10.180.90.39:30081/api/users") // implement this endpoint
      .then(res => {
        setUsers(res.data);
        if (res.data.length) setTicket(prev => ({ ...prev, passengerName: `${res.data[0].firstName} ${res.data[0].lastName}` }));
      })
      .catch(() => setUsers([]));
  }, []);

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://10.180.90.39:30081/api/flights/book", ticket);
      setMsg(`✅ Booked Sucessfully`);
      setTicket({ ...ticket, destinationAddress: "", kickoffAddress: "", bookingDate: "" });
    } catch {
      setMsg("❌ Booking failed.");
    }
  };

  return (
    <div className="container">
      <h2>Book Ticket</h2>
      <form onSubmit={submit}>
        <select value={ticket.passengerName} onChange={e => setTicket({ ...ticket, passengerName: e.target.value })}>
          {users.map(u => (
            <option key={u.id} value={`${u.firstName} ${u.lastName}`}>{u.firstName} {u.lastName}</option>
          ))}
        </select>
        <input name="kickoffAddress" placeholder="Kickoff Address" value={ticket.kickoffAddress} onChange={e => setTicket({ ...ticket, kickoffAddress: e.target.value })} required />
        <input name="destinationAddress" placeholder="Destination Address" value={ticket.destinationAddress} onChange={e => setTicket({ ...ticket, destinationAddress: e.target.value })} required />
        <input type="date" name="bookingDate" value={ticket.bookingDate} onChange={e => setTicket({ ...ticket, bookingDate: e.target.value })} required />
        <button type="submit">Book</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
