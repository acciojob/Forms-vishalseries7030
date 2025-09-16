// App.js
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import "../styles/App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link id="form-link" to="/form">Form Layout</Link>
            </li>
            <li>
              <Link id="form-ref-link" to="/form-ref">Form with useRef</Link>
            </li>
            <li>
              <Link id="form-state-link" to="/form-state">Form with useState</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
