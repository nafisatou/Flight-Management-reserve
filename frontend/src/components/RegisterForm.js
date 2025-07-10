import React, { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const [msg, setMsg] = useState("");

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://10.180.90.39:30081/api/users/register", user);
      setMsg(`✅ Registered ${res.data.firstName}!`);
      setUser({ firstName: "", lastName: "", email: "" });
    } catch {
      setMsg("❌ Registration failed.");
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form onSubmit={submit}>
        <input name="firstName" placeholder="First Name" value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} required />
        <input name="lastName" placeholder="Last Name" value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
