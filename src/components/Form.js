// Form.js
import React from "react";
import Card from "./Card";

function Form() {
  return (
    <Card>
      <h2>Sign Up</h2>
      <form id="info-form">
        <div>
          <label>Full Name</label>
          <input type="text" id="full_name" placeholder="Enter your full name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" id="password_confirmation" placeholder="Confirm your password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;
