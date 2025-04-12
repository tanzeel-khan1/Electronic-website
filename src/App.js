import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from "./watch/Land"; // Import Land.js
import Watch2 from "./watch/Watch2"; // Import Watch2.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />         {/* Home route */}
        <Route path="/watch2" element={<Watch2 />} /> {/* Watch2 route */}
      </Routes>
    </Router>
  );
}

export default App;
