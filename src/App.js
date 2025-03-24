import React, { useState } from "react";
import "./App.css";

// Import Components
import Nabar from "./zaid/Nabar";
import Navbar2 from "./zaid/Navbar2";
import Three from "./zaid/Three";
import Fan from "./zaid/Fan";
import Machine from "./zaid/Machine";
// import Login from "./Login"
function App() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="color-red">
            <Nabar />
            <Navbar2 data={cartCount} />
            <Three />
            <Fan setData={setCartCount} />
            <Machine  setData={setCartCount}/>
          {/* <Login/> */}
        </div>
    );
}

export default App;
