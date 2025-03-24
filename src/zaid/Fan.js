


import React, { useState } from "react";

function Fan({ setData }) {
  const [showMoreFans, setShowMoreFans] = useState(false); 

  function updateData() {
    setData((prev) => prev + 1);
  }

  function handleSeeMore() {
    setShowMoreFans(true); 
  }

  return (
    <div>
      <h1>Fan's</h1>

      <div className="fans">
        <div className="Royal">
          <img
            src="https://imraneshop.com/pub/media/catalog/product/cache/d8b8548ef8c5212cc9f00d4de21c46a9/s/c/screenshot_2_1_3.png"
            alt="Royal Ac/Dc Fan"
          />
          <h1>Royal Ac/Dc Fan</h1>
          <p>Price: 9700</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>

        <div className="khurs">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3JXsVc2ju5V1MlHvAJXYzdB6W5-XCde3Oz4HukuaIQBZgQyD4zVsC3JaG39_QLFQBLs&usqp=CAU"
            alt="Khurshid Ac/Dc Fan"
          />
          <h1>Khurshid Ac/Dc Fan</h1>
          <p>Price: 9900</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>

        <div className="rado">
          <img
            src="https://images.olx.com.pk/thumbnails/522576900-240x180.jpeg"
            alt="Rado Ac/Dc Fan"
          />
          <h1>Rado Ac/Dc Fan</h1>
          <p>Price: 7000</p>
          <button onClick={updateData}>Add to Cart</button>
        </div>
      </div>

      {!showMoreFans && (
        <button className="see-more" onClick={handleSeeMore}>
          See More
        </button>
      )}

      {showMoreFans && (
        <div className="fan-second">
          <div className="leeds">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfplETSx3VwlmGEua_tCZC4Sq5yV6eVJMdog&s"></img>
          <h1>Leed's Ac/Dc Fan</h1>
          <p>Price: 7000</p>
          <button onClick={updateData}>Add to Cart</button>
       
          </div>

          <div className="burj">
          <img src="data:image/jpeg;base64,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"></img>
         <h1>Al-Burj Ac/Dc Fan</h1>
          <p>Price: 7000</p>
          <button onClick={updateData}>Add to Cart</button>
       
          </div>
          <div className="pak">
            <img src="https://img.drz.lazcdn.com/static/pk/p/896bc46e199bac4eb41c3a8bde8dd879.jpg_720x720q80.jpg"></img>
         <h1>Pak Fan Ac/Dc Fan</h1>
          <p>Price: 10,000</p>
          <button onClick={updateData}>Add to Cart</button>
       
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Fan;
