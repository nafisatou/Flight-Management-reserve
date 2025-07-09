import React, { useState } from "react";
import axios from "axios";

export default function SearchTickets() {
  const [filters, setFilters] = useState({ date: "", destination: "", kickoff: "" });
  const [results, setResults] = useState([]);

  const search = async () => {
    let query = "";
    if (filters.date) query += `date=${filters.date}&`;
    if (filters.destination) query += `destination=${filters.destination}&`;
    if (filters.kickoff) query += `kickoff=${filters.kickoff}&`;

    try {
      const res = await axios.get(`http://localhost:8080/api/flights/search?${query}`);
      setResults(res.data);
    } catch {
      setResults([]);
    }
  };

  return (
    <div className="container">
      <h2>Search Tickets</h2>
      <input type="date" onChange={e => setFilters({ ...filters, date: e.target.value })} />
      <input placeholder="Destination" onChange={e => setFilters({ ...filters, destination: e.target.value })} />
      <input placeholder="Kickoff" onChange={e => setFilters({ ...filters, kickoff: e.target.value })} />
      <button onClick={search}>Search</button>

      <div className="table-container">
        <table>
          <thead>
            <tr><th>Name</th><th>Kickoff</th><th>Destination</th><th>Date</th></tr>
          </thead>
          <tbody>
            {results.map(t => (
              <tr key={t.id}>
                <td>{t.passengerName}</td>
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
