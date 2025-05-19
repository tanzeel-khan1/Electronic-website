import { useState } from "react";
import './Login.css'
function Nxt(){
    const [isLogin, setIsLogin] = useState(true);
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);

    const getUsers = () => {
        return JSON.parse(localStorage.getItem("users")) || []  
      };

const handleSubmit = (e) => {
    e.preventDefault();

    let users = getUsers();

    if (isLogin) {
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );
        if (foundUser) {
            setLoggedInUser(foundUser.name);
            alert(`Welcome ${foundUser.name}`);
            setEmail("");
            setPassword("");
        } else {
            alert("Invalid credentials");
        }
    } else {
        const emailExists = users.some((user) => user.email === email);
        if (emailExists) {
            alert("Email already exists!");
        } else {
            const newUser = { name, email, password };
            const updatedUsers = [...users, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            alert("Signup Successful");
            setIsLogin(true);
            setname("");
            setEmail("");
            setPassword("");
        }
    }
};

    return(
        <>
        <div id="main">
      <h2>{isLogin ? "Login" : "Sigup"}</h2>
      {loggedInUser ? (
        <h3>Hello, {loggedInUser}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="name">
            <label>Name:</label>
            <input

            type="text"
            required
            value={name}
            placeholder="  Name"
            onChange={(e) => setname(e.target.value)}
            />
          </div>
        )}
        <div className="email">
            <label>Email:</label>
            <input
            type="text"
            required
            value={email}
            placeholder="  Email"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="password">
            <label>Password:</label>
            <input 
            type="text"
            required
            value={password}
            placeholder="  Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className="submit" type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
      )}
    {!loggedInUser && (
        <p >
            {isLogin ?  "Mere pass Account nhi hai?" : "Mere pass Account hai?"}{""}
            <button className="set" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Signup" : "Login"} 

            </button>
        </p>
    )

    }



        </div>
        </>
    )
}
export default Nxt;