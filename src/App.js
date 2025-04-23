
import React, { useState  } from 'react';
import Nabar from "./zaid/Nabar";
import Navbar2 from "./zaid/Navbar2";

import Fan from "./zaid/Fan";
// import Notepad from './Notepad';
function App() {
  const [counter, setCounter] = useState(0);


  

  return (
    <div>
      <Nabar />
      <Navbar2 counter={counter}  />
      <Fan setCounter={setCounter} />
      {/* <Notepad/> */}
     

    </div>
  );
}

export default App;

