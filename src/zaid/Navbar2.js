
// import React from "react";

// function Navbar2({ data }) {
//   return (
//     <div>
//       <nav className="nav-2">
//         <div className="nav-2-1">
//           <ul>
//             <li><a href="#">WeekEnd Offer's</a></li>
//             <li><a href="#">Special Offer's</a></li>
//             <li><a href="#">Buy on Installment</a></li>
//           </ul>
//         </div>
//         <div className="nav-2-2">
//           <h1>Cart(<span>{data}</span>)</h1>
//           <h2>Developer: <span>TANZEEL</span></h2>
//         </div>
//       </nav>
//       <img
//         className="img"
//         src="https://lahorelectronics.com/wp-content/uploads/2020/12/W020190724571436691788.png"
//         alt="Electronics Banner"
//       />
//     </div>
//   );
// }

// export default Navbar2;
// import React from "react";
import React, { useEffect, useState } from 'react';


function Navbar2({ counter }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fullName = prompt('Enter your full name without space');
    if (fullName) {
      const generatedUsername = '@.' + fullName + fullName.length;
      setUsername(generatedUsername);
    }
  }, []);
  return (
    <div>
      <nav className="nav-2">
        
        <div className="nav-2-2">
          <h1 style={{marginLeft:"3rem"}}>Cart(<span>{counter}</span>)</h1>
          <p style={{marginLeft:"5rem", marginTop:"2rem"}}>{username}</p>

          <h2>Developer: <span>TANZEEL</span></h2>
        </div>
        {/* <p className="text-lg text-blue-600 mt-2">{username}</p> */}

      </nav>
      <img
        className="img"
        src="https://lahorelectronics.com/wp-content/uploads/2020/12/W020190724571436691788.png"
        alt="Electronics Banner"
      />
    </div>
  );
}

export default Navbar2;
