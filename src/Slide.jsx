import React, { useState } from 'react';
import './Slidebar.css';

const Slide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
      <button className="toggle-button" onClick={() => setIsOpen(true)}>Open</button>
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>×</button>

        <h2>Sidebar Menu</h2>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <section>
      <img src='https://images.samsung.com/is/image/samsung/assets/pk/galaxy-ai/25_01/galaxyai_f01_ft03_kv_pc_v4.3_gro.jpg?$1440_N_JPG$'></img>
  <h1>uytfy</h1>
<button>yryry</button>
      </section>
      {/* {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>} */}
    </>
  );
};

export default Slide;
