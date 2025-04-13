
import React, { useState } from 'react';
import Nabar from "./zaid/Nabar";
import Navbar2 from "./zaid/Navbar2";
import Three from "./zaid/Three";
import Fan from "./zaid/Fan";
import Machine from './zaid/Machine';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Nabar />
      <Navbar2 counter={counter} />
      <Three />
      <Fan setCounter={setCounter} />
      <Machine setCounter={setCounter} />

    </div>
  );
}

export default App;
