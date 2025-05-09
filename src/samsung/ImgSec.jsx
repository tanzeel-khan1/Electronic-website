
import { useEffect, useState } from "react";

function ImgSec() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentSlide === 0 ? (
        <div className="img-sec fade">
          <div className="img-1">
            <img src="https://images.samsung.com/is/image/samsung/assets/pk/home/250129/Installment_Banner_Dotcom_Desktop_1440x640.png?imwidth=1366"/>
            <h1>Flexible Installment</h1>
            <h2>Plan With 0% Markup</h2>
            <p>Upgrade Your Samsung experience</p>
            <p className="imh">With Convenient installment option</p>
            <button>Explore Installment Options</button>
          </div>
        </div>
      ) : currentSlide === 1 ? (
        <section className="next fade">
          <h1>Snap today,</h1>
          <h2>Smile Forever</h2>
          <p>Give mom the day she deserves</p>
          <button>Buy Now</button>
          <img
            src="https://images.samsung.com/is/image/samsung/assets/pk/home/250502/2025_MothersDay_MainKV_Static_Hero_PC_NoText_1440x640.jpg?$ORIGIN_JPG$"/>
        </section>
      ) : (
        <section className="next fade">
          <h1>The New Galaxy</h1>
          <h2>A56 | A36 5G</h2>
          <p>With Galaxy AI and powerful features</p>
          <button>Shop Now</button>
          <img src="https://images.samsung.com/is/image/samsung/assets/pk/home/250423/SEPAK-A_Series_Scom_en_1440x640.png?imwidth=1366"          />
        </section>
      )}
    </>
  );
}

export default ImgSec;

