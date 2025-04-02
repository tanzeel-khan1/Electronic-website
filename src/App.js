import React from "react";
import "./App.css";

function App() {
    const handleOpenWindow = () => {
        window.open("", "_blank", "width=600,height=800");
    };

    return (
        <div className="color-red">
            {/* <Nabar /> */}
            {/* <Navbar2 data={cartCount} /> */}
            {/* <Three /> */}
            {/* <Fan setData={setCartCount} /> */}
            {/* <Machine setData={setCartCount}/> */}
            {/* <Login/> */}
            <button onClick={handleOpenWindow}>Open New Window</button>
        </div>
    );
}

export default App;
