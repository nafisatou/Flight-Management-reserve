import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/flights/search")
      .then(res => setTickets(res.data))
      .catch(() => setTickets([]));
  }, []);

  return (
    <div className="container">
      <h2>All Tickets</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Kickoff</th>
              <th>Destination</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id}>
                <td>{t.kickoffAddress}</td>
                <td>{t.destinationAddress}</td>
                <td>{t.bookingDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
