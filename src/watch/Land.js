import { useNavigate } from 'react-router-dom';
import "./watch.css";

function Land() {
  const navigate = useNavigate();

  const goToWatch2 = () => {
    navigate('/watch2'); 
  };

  return (
    <div>
      <nav className="nav-1">
      <a href="/">
  <h1>Watch <span>whiz</span></h1>
</a>

      </nav>
      <div className="container0">
        <div className="container01">
          <h1 style={{ marginTop: "1rem" }}>Hi  !</h1>
          <h1 style={{ color: "blue" }}>WellCome </h1>
          <h1>TO</h1>
          <h1 style={{ color: "blue" }}>Our</h1>
          <h1>Store</h1>
          <button onClick={goToWatch2}>Let's Go →</button> 
        </div>
        <div className="container02">
          <img src="https://www.mensjournal.com/.image/t_share/MjA0MTg3MDI4MTM5NTUwMzQ4/omega.jpg" alt="watch" />
        </div>
      </div>
    </div>
  );
}

export default Land;
