
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <Router>
            <div>
                <nav>
                    <h1>
                        <a href="/">Qureshi o<span>Electronic's</span></a>
                    </h1>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
               
            </div>
        </Router>
       
    );
}

function Home() {
    return (
        <div>
            <h1>Hello Home</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>Hello About</h1>
        </div>
    );
}

function Service() {
    return (
        <div>
            <h1>Hello Service</h1>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h1>Hello Contact</h1>
        </div>
    );
}

export default Navbar;
