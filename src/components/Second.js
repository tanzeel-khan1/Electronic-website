import { Link } from "react-router-dom";

function Second() {
  return (
    <div>
      <div className="main">
        <div className="container-1">
          <h1 className="white">LET'S</h1>
          <h1>EXPLORE</h1>
          <h1 className="gold">UNIQUE</h1>
          <h1>CLOTHES.</h1>
          <p>Live for influentail and innovative fashion!</p>
          <button>Shop Now</button>
        </div>
        <div className="container-2">
          <img src="/font currr.png" alt="Fashion Font" />
        </div>
      </div>
      <nav className="brands">
        <a className="red" href={"https://www2.hm.com"}>
        <img src="hm orr.png"></img>
        </a>

        <a className="obey" href="https://obeyclothing.com/">
          <img src="obey orr.png"></img>
        </a>
        <a className="shopify" href="https://shopify.com/">
          <img src="shpify2.png"></img>
        </a>
        <a className="laco" href="https://www.Lacoste.com/">
          <img src="loca 3.png"></img>
        </a>
        <a className="levi" href="https://www.Levi.com/">
          <img src="levi.png"></img>
        </a>
        <a className="ama" href="https://www.amazon.com/">
          <img src="ama2.png"></img>
        </a>
      </nav>
    </div>
  );
}
export default Second;
