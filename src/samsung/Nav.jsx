import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Sumsung.css";

function Nav(){
    return(
        <Router>
        <>
        <nav>
            <h1>
                <a href="/" className="me">SAMSUNG
                </a>
            </h1>
            <h4>Support</h4>
            <h5>Business</h5>

            <ul>
            <li><NavLink to="/About" exact>About</NavLink></li>
            <li><NavLink to="/Company">Company</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/Start" >Start</NavLink></li>
            <li><NavLink to="/Mobile">Mobile's</NavLink></li>
            <li><NavLink to="/Laptop">Laptop's</NavLink></li>
          </ul>
          <input
          type="text"
          placeholder="  🔍︎ │ Search ..."
          />
        </nav>

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
        </Routes>
        </>
        </Router>

    )
}

function About() {
    return (
      <div>
        <h1>We are <span style={{color:"blue"}}>best</span> in the world</h1>
      </div>
    );
  }
  
  function Company() {
    return (
     <>
     <h1 style={{color:"blue", textAlign:"center"}}>SUMSUNG</h1>
     </>
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
    return (
      <div>
        <h1>We start is good</h1>
      </div>
    );
  }
  
  function Mobile() {
    return (
      <>
         <h1>We <span style={{color:"blue"}}>Mobile's</span> is best in the world</h1>
      </>
    );
  }
  
  function Laptop() {
    return (
      <>
         
        <h1>We <span style={{color:"blue"}}>Laptop's</span> is best in the world</h1>
      </>
    );
  }


export default Nav;