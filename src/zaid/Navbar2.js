
// import React, { useEffect, useState } from 'react';
// import data from "./zaid/Data"
// function Navbar2({ counter }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const fullName = prompt('Enter your full name without space');
//     if (fullName) {
//       const trimmedName = fullName.trim();
//       const generatedUsername = '@.' + trimmedName + trimmedName.length;
//       setUsername(generatedUsername);
//     }
//   }, []);

//   return (
//     <div>
//       <nav className="nav-2">
//         <div className="nav-2-2">
//           <h1 className="counter">Cart(<span>{counter}</span>)</h1>
          
//           <div className="searchInput_Container">
//             <input
//               id="searchInput"
//               type="text"
//               placeholder="Search here..."
//               onChange={(event) => setSearchTerm(event.target.value)}
//             />
//           </div>

//           <div>
//             <p className="pop-up">Your username is: {username}</p>
//           </div>

//           <h2>
//             Developer:
//             <a
//               href="https://www.instagram.com/tanzeel3691/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Tanzeel
//             </a>
//           </h2>
//         </div>
//       </nav>

//       <img
//         className="img"
//         src="https://lahorelectronics.com/wp-content/uploads/2020/12/W020190724571436691788.png"
//         alt="Banner"
//       />

//       <div className="template_Container">
//         {data
//           .filter((val) =>
//             searchTerm === "" ? true : val.title.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((val) => (
//             <div className="template" key={val.id}>
//               <img src={val.image} alt={val.title} />
//               <h3>{val.title}</h3>
//               <p className="price">${val.price}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Navbar2;
