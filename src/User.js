import { useState } from "react";
import React from "react";
import "./index.css";

 function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");



  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "" });
    setError("");
  };



 
      const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

             const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const url = isLogin ? "/apilogin" : "/apisignup";
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
          const data = await response.json();
                if (!response.ok) {
        throw new Error(data.message | "Something went wrong");
      }
      alert(isLogin ? "Login successful!" : "Signup successful!");
    } catch (err) 
    {
      setError(err.message);
    }
  };

          return (
    <div className="container">
      <div>
        <img src="https://d15-a.sdn.cz/d_15/c_img_F_E/6blBqh3.jpeg?fl=cro,0,0,798,450%7Cres,1200,,1%7Cjpg,80,,1"></img>
        {/* <img src="https://4kwallpapers.com/images/walls/thumbs_2t/13006.jpeg"></img> */}
        <h2 >
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email"placeholder="   Email" value={formData.email} onChange={handleChange} required className="babar"/>



          <input type="password" name="password"placeholder="   Password" value={formData.password} onChange={handleChange} required className="shaheen"/>

          {/* {error && <p >{error}</p>} */}

          <button type="submit " className="btn1">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p>{isLogin ? "Don't have an account" : "I have Already have an account"} </p>
        <button onClick={toggleMode} className="btn2">
            {isLogin ? "Sign Up" : "Login"}
          </button>
      </div>
    </div>
  );
}
export default AuthPage;