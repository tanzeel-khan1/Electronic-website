import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import "./project.css";

function Navbar() {
    const navigate = useNavigate(); 

    const handleSignupClick = () => {
        navigate("/signup"); 
    }
    return (
        <div>
        <nav>
            <h1>
                <a href="/">₹ FASHION</a>
            </h1>
            <ul>
                <li className=""><NavLink to="/catalouge">CATALOUGE</NavLink></li>
                <li><NavLink to="/fashion">FASHION</NavLink></li>
                <li><NavLink to="/favourite">FAVOURITE</NavLink></li>
                <li><NavLink to="/lifestyle">LIFESTYLE</NavLink></li>
                <li><button onClick={handleSignupClick}>Sign up</button></li>
            </ul>
        </nav>
        
        </div>
        
    );
}

function Catalouge() {
    return <h1>Hello Catalouge</h1>;
}

function Fashion() {
    return <h1>Hello Fashion</h1>;
}

function Favourite() {
    return <h1>Hello Favourite</h1>;
}

function LifeStyle() {
    return <h1>Hello LifeStyle</h1>;
}

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit">
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/catalouge" element={<Catalouge />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/lifestyle" element={<LifeStyle />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}
