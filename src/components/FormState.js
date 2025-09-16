// FormState.js
import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    alert("Form submitted with useState!");
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
