import "./watch.css";

function Land(){
    const openWindow = () => {
        window.open('/newPage', '_blank', 'width=800,height=600');
    };
    return(
        <div>
            <nav className="nav-1">
            {/* <img src="/watch logo store.png" alt="Watch Logo Store" /> */}
            <h1>Watch <span>whiz</span></h1>
            {/* <marquee direction="right"><h1>Watch <span>whiz</span></h1></marquee> */}
            </nav>
            <div className="container0">
               <div className="container01">
                <h1 style={{marginTop:"1rem"}}>Hi  !</h1>
                <h1 style={{color:"blue"}}>WellCome </h1>
                <h1>TO</h1>
                <h1   style={{color:"blue"}}>Our</h1>
                <h1>Store</h1>
                <button onClick={openWindow}>Let's Go   →
                </button>
                </div> 
               <div className="container02">
                {/* <img src="https://media.rolex.com/image/upload/v1725888685/rolexcom/collection/configurator/config-launcher/2024/config-launcher-watches-deepsea-m136668lb-0001_2403jva_002.jpg"></img> */}
                {/* <img src="https://c4.wallpaperflare.com/wallpaper/116/423/763/clock-detail-jewelry-luxury-wallpaper-preview.jpg"></img> */}
                <img src="https://www.mensjournal.com/.image/t_share/MjA0MTg3MDI4MTM5NTUwMzQ4/omega.jpg"></img>
                
                </div> 

                 </div>
        
      </div>
    )
}
export default Land;