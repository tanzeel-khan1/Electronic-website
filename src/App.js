import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import Land from "./watch/Land";
import Watch2 from './watch/Watch2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/newpage" element={<Watch2 />} />
      </Routes>
    </Router>
  );
}

export default App;
