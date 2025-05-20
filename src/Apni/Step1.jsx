import React, { useEffect, useState } from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Step1.css";


// import Button from 'react-bootstrap/Button';

function Step1(){
    const [username, setUsername] = useState("");
    
      useEffect(() => {
        const fullName = prompt("Enter your full name without space");
        if (fullName) {
          const trimmedName = fullName.trim();
          const generatedUsername = "@." + trimmedName + trimmedName.length;
          setUsername(generatedUsername);
        }
      }, []);
    return(
        <Router>
            <>
            <nav className="Step1">
                <NavLink className="lo" to="/"> <h1>Apna<span>X</span>Hai</h1></NavLink>
                <ul>


                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/Start">Start</NavLink></li>

                </ul>
                <p className="pop-up">Your username is: {username}</p>

             <div className="inp">
               <span>🔍︎</span>
                              
                <input
                type="text"
                placeholder="   Search"
                />
             </div>

            </nav>
             <img  src="https://blog.boon.so/wp-content/uploads/2024/03/olympics-logo-1-1024x615.jpg"/>

            <Routes>


                <Route path="/About" element={<About />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Start" element={<Start />} />
            </Routes>
            {/* <Button variant="primary">Primary</Button> */}
            </>
        </Router>
    )
}

function Home() {
    return <div></div>;
}

function About() {
    return (
        <div>
            <h1>We are <span style={{color:"blue"}}>best</span> in the world</h1>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <span>Contact on This Email ￬</span>
            <h3 style={{color:"blue"}}>Tanzeel0680@gmail.com</h3>
        </div>
    );
}

function Start() {
    return <div><h2>Get Started Here!</h2></div>;
}

export default Step1;
