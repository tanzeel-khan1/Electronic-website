import React, { useState } from "react";
import { data } from "../zaid/Data";

function Fan({ setCounter }) {
  const [showMoreFans, setShowMoreFans] = useState(false);

  function updateData() {
    setCounter((prev) => prev + 1);
  }

  function handleSeeMore() {
    setShowMoreFans(true);
  }

  return (
    <div>
      <h1 style={{ color: "#780C28" }}>Fan's</h1>

      {data?.map((item, index) => (
        <div className="" style={{
          display:"flex",
          flexDirection:"column",
          width:"200px",
          height:"200px",
          marginTop:"2rem"
        }}>
          <div>{item.title}</div>
          <img src={item.imgSrc} alt=""/>
        </div>
      ))}
      {/* <img src="https://www.surmawala.pk/cdn/shop/files/SS-Collage-Banner-1_785x.jpg?v=1743777686" className="fur-img"></img> */}
      <img
        src="https://www.surmawala.pk/cdn/shop/files/Summer-HP-Philips-Banner.jpg?v=1743862548&width=1500"
        style={{ width: "100%" }}
      ></img>
    </div>
  );
}

export default Fan;
