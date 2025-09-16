// Card.js
import React from "react";

function Card({ children }) {
  return (
    <div style={{
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export default Card;
