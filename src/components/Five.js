import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Five(){
    return(
       <div>
         <div className="section-5">
            <h1 className="babar">JOIN SHOPPING COMMUNITY TO0  </h1>
            <h1 style={{marginLeft:"27rem", color:"#ffffff",fontSize:"2.2rem", marginTop:"1rem"}}>GET MONTHLY PROMO</h1>
         <p>Type your email down below and be young wild generation</p>
         <div className="search"> <input type="search" placeholder="   Add your email here"></input>
         <button>SEND</button>
          </div>
        </div>
        <div className="last">
        <div className="last-1">
            <h1>FASHION</h1>
            <p className="para">Complete your style with awesome</p>
            <p style={{marginTop:"0.1rem"}}> clothes from us.</p>
           <div className="socail-container">
           <div className="insta">
           <FontAwesomeIcon icon={faInstagram} className='ins'  />
           </div>   
           <div className="face">
           <FontAwesomeIcon icon={faFacebook} className='fac' />
           </div>
           <div className="twitter">
           <FontAwesomeIcon icon={faTwitter} className='twi' />
           </div>
           <div className="linkdin">
           <FontAwesomeIcon icon={faLinkedin} className='lind' />

           </div>
           </div>

        </div>
        <div className="last-2">
            <div className="comp-name">
                <h1>Company</h1>
                <p>About</p>
                <p>Contant Us</p>
                <p> Service</p>
                <p>Carier</p>

            </div>
            <div className="quick-link">
            <h1>Quick link</h1>
                <p> Share Location</p>
                <p>tracking</p>
                <p> Sate</p>
                <p>FAQs</p>
            </div>
            <div className="legal">
            <h1>Legal</h1>
                <p>Terms & Condition</p>
                <p>privacy & Policy .</p>
               
            </div>


        </div>
        </div>


       </div>
    )
}
export default Five;
