import { data } from "../zaid/Data";

import React from "react";
// import { data } from "../zaid/Data";

function Fan({ setCounter }) {
  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedData.push(data.slice(i, i + 4));
  }

  function updateData() {
    setCounter((prev) => prev + 1);
  }
  const Alert = () => {
    alert('This item is Add in Your Cart !');
  };

  return (
    <div>
      {/* <h1 style={{ color: "#780C28" }}>Fan's</h1> */}

      {groupedData.map((group, rowIndex) => (
        <div className="main" key={rowIndex}>
          {group.map((item) => (
            <div className="container" key={item.id}>
              {/* <p>ID: {item.id}</p> */}
              {/* <div>{item.title}</div> */}
              <img
                src={item.imgSrc}/>
                <h1>{item.title}</h1>
              <h2> Rs: {item.price}</h2>
              <button onClick={updateData} onClickCapture={Alert}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}

      
    </div>
  );
}

export default Fan;
