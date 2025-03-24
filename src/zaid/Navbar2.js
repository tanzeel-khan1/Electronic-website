
import React from "react";

function Navbar2({ data }) {
  return (
    <div>
      <nav className="nav-2">
        <div className="nav-2-1">
          <ul>
            <li><a href="#">WeekEnd Offer's</a></li>
            <li><a href="#">Special Offer's</a></li>
            <li><a href="#">Buy on Installment</a></li>
          </ul>
        </div>
        <div className="nav-2-2">
          <h1>Cart(<span>{data}</span>)</h1>
          <h2>Developer: <span>TANZEEL</span></h2>
        </div>
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
