import React, { useState } from "react";
function Machine({ setCounter }) {
  const [showMoreFans, setShowMoreFans] = useState(false);

  function updateData() {
    setCounter((prev) => prev + 1);
  }

  function handleSeeMore() {
    setShowMoreFans(true);
  }

  return (
    <div>
      <h1 style={{color:"#780C28"}}>Washing Machines</h1>
      <div className="machines">
        <div className="haier">
          <img
            src="https://modernelectronics.pk/cdn/shop/files/WhatsApp-Image-2024-07-23-at-11.16.08-PM.webp?v=1727081108"
            alt="Haier Washing Machine"
          />
          <h1>Haier Washing Machine</h1>
          <p>Price: 25000</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>

        <div className="daw">
          <img
            src="https://img.drz.lazcdn.com/static/pk/p/05e237bbe29b564599aae86d1d8f25ba.jpg_960x960q80.jpg_.webp"
            alt="Dawlance Washing Machine"
          />
          <h1>Dawlance Washing Machine</h1>
          <p>Price: 24000</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>

        <div className="pel">
          <img
            src="https://www.mega.pk/items_images/PEL+PWMS+1250+Semi+Auto+Washing+Machine+12+5KG+Price+in+Pakistan%2C+Specifications%2C+Features_-_23998.webp"
            alt="Pel Washing Machine"
          />
          <h1>Pel Washing Machine</h1>
          <p>Price: 25000</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>
      </div>

      {!showMoreFans && (
        <button className="see-more" onClick={handleSeeMore} style={{marginTop:"3rem"}}>
          See More
        </button>
      )}

      {showMoreFans && (
        <div className="machine-second">
          <div className="kenwood">
            <img
              src="https://whitehouse.com.pk/wp-content/uploads/2021/10/899.png"
              alt="Kenwood Washing Machine"/>
            <h1>Kenwood Washing Machine</h1>
            <p>Price: 25000</p>
            <button onClick={updateData}>Add to Cart</button>
          </div>

          <div className="jack">
            <img
            src="https://haqelectronics.com/wp-content/uploads/2024/02/Single-Tub-Washing-Machine-10kg-Black.-JP-79911.jpg"/>
            <h1>Jackpot Washing Machine</h1>
            <p>Price: 22000</p>
            <button onClick={updateData}>Add to Cart</button>
          </div>
          <div className="jack">
            <img
            src="https://hadielectronics.com.pk/wp-content/uploads/2024/11/Untitled-design-4.webp"/>
            <h1>Natainal Washing Machine</h1>
            <p>Price: 12000</p>
            <button onClick={updateData}>Add to Cart</button>
          </div>
        </div>
      )}
      {/* <img src="https://www.surmawala.pk/cdn/shop/files/Summer-HP-Philips-Banner.jpg?v=1743862548&width=1500" style={{width:"100%"}}></img> */}
    </div>
  );
}

export default Machine;

