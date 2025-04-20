
import React, { useState, useEffect  } from 'react';
import Nabar from "./zaid/Nabar";
import Navbar2 from "./zaid/Navbar2";
import Fan from "./zaid/Fan";
// import Ref from './zaid/Ref';
function App() {
  const [counter, setCounter] = useState(0);


  

  return (
    <div>
      <Nabar />
      <Navbar2 counter={counter}  />
      <Fan setCounter={setCounter} />
      {/* <Ref/> */}
     

    </div>
  );
}

export default App;

