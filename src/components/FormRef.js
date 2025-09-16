// FormRef.js
import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", confirmPasswordRef.current.value);
    alert("Form submitted with useRef!");
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" ref={confirmPasswordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
