import React, { useEffect, useState } from "react";
import { data } from "../zaid/Data";
function Navbar2({ counter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fullName = prompt("Enter your full name without space");
    if (fullName) {
      const trimmedName = fullName.trim();
      const generatedUsername = "@." + trimmedName + trimmedName.length;
      setUsername(generatedUsername);
    }
  }, []);

  return (
    <div>
      <nav className="nav-2">
        <div className="nav-2-2">
          <h1 className="counter">
            Cart 🛒(<span>{counter}</span>)
          </h1>

          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="  🔍︎ │ Search Here..."
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div>
            <p className="pop-up">Your username is: {username}</p>
          </div>

          <h2>
            Developer:<span>Tanzeel</span>
          </h2>
        </div>
      </nav>

      <img
        className="img"
        src="https://lahorelectronics.com/wp-content/uploads/2020/12/W020190724571436691788.png"
      />

      <div className="">
        {data
          ?.filter((item) =>
            searchTerm === ""
              ? false
              : item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <div className="container" key={item.id }>   
                              {/* <p>{item.category}</p> */}

              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">Rs: {item.price}</p>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar2;
