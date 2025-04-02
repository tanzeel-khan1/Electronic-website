import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
    const [newWindow, setNewWindow] = useState(null);

    const handleOpenWindow = () => {
        window.open("", "_blank", "width=200,height=300");
        function Babar(){
            return(
                <div>jgyufyt</div>
            )
        }
    }
    const handleCloseWindow = () => {
        if (newWindow) {
            newWindow.close(); 
            setNewWindow(null); 
        }
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
            <button onClick={handleCloseWindow}>Open New Window</button>

        </div>
    );
}

export default App;
