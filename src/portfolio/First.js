import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Ptf.css";

function First() {
  return (
    <Router>
      <div>
        <nav className="naw">
          <h1>
            <a href="/" >TANZEEL</a>
          </h1>
          <ul>
            <li><NavLink to="/About" exact>About</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h1>HTML</h1>
      <h1>CSS</h1>
      <h1>JAVASCRIPT</h1>
      <h1>REACT</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
        <p>This My Email Accont Contact on ￬</p>
      <h1>Tanzeel0680@gmail.com</h1>
    </div>
  );
}

export default First;
