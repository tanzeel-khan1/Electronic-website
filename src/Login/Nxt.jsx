// import { useState } from "react";
// import './Login.css'
// function Nxt(){
//     const [isLogin, setIsLogin] = useState(true);
//     const [name, setname] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loggedInUser, setLoggedInUser] = useState(null);

//     const getUsers = () => {
//         return JSON.parse(localStorage.getItem("users")) || []  
//       };

// const handleSubmit = (e) => {
//     e.preventDefault();

//     let users = getUsers();

//     if (isLogin) {
        
//         const foundUser = users.find(
//             (user) => user.email === email && user.password === password
//         );
//         if (foundUser) {
//             setLoggedInUser(foundUser.name);
//             alert(`Welcome ${foundUser.name}`);
//             setEmail("");
//             setPassword("");
//         } else {
//             alert("Sahi nhi hai");
//         }
//     } else {
//         const emailExists = users.some((user) => user.email === email);


//         if (emailExists) {
//             alert("Pehly se hai");
//         } else {
//             const newUser = { name, email, password };
//             const updatedUsers = [...users, newUser];
//             localStorage.setItem("users", JSON.stringify(updatedUsers));
//             alert("Signup Successful");
//             setIsLogin(true);
          
//               setname("");
//             setEmail("");
//             setPassword("");
//         }
//     }
// };

//     return(
//         <>
//         <div id="main">
//       <h2>{isLogin ? "Login" : "Sigup"}</h2>
//       {loggedInUser ? (
//         <h3>Hello {loggedInUser}</h3>
//       ) : (
//         <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="name">
//             <label>Name:</label>
//             <input

//             type="text"
//             required
//             value={name}
//             placeholder="  Name"
//             onChange={(e) => setname(e.target.value)}
//             />
//           </div>
//         )}
//         <div className="email">
//             <label>Email:</label>
//             <input
//             type="text"
//             required
//             value={email}
//             placeholder="  Email"
//             onChange={(e) => setEmail(e.target.value)}
//             />
//         </div>
//         <div className="password">
//             <label>Password:</label>
//             <input 
//             type="text"
//             required
//             value={password}
//             placeholder="  Password"
//             onChange={(e) => setPassword(e.target.value)}
//             />
//         </div>
//         <button className="submit" type="submit">{isLogin ? "Login" : "Signup"}</button>
//         </form>
//       )}
//     {!loggedInUser && (
//         <p >
//             {isLogin ?  "Mere pass Account nhi hai?" : "Mere pass Account hai?"}{""}
//             <button className="set" onClick={() => setIsLogin(!isLogin)}>
//                 {isLogin ? "Signup" : "Login"} 

//             </button>
//         </p>
//     )

//     }



//         </div>
//         </>
//     )
// }
// export default Nxt;

import { useState } from "react";
import { useForm } from "react-hook-form";
import './Login.css';

function Nxt() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

  const onSubmit = (data) => {
    let users = getUsers();

    if (isLogin) {
      const foundUser = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (foundUser) {
        setLoggedInUser(foundUser.name);
        alert(`Welcome ${foundUser.name}`);
        reset();
      } else {
        alert("Sahi nhi hai");
      }
    } else {
      const emailExists = users.some((user) => user.email === data.email);
      if (emailExists) {
        alert("Pehly se hai");
      } else {
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password
        };
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Signup Successful");
        setIsLogin(true);
        reset();
      }
    }
  };

  return (
    <div id="main">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      {loggedInUser ? (
        <h3>Hello {loggedInUser}</h3>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div className="name">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  maxLength: 3, 
                  required: !isLogin && "Name is required",
                  message: "3length"
                  
                })}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
          )}

          <div className="email">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>

          <div className="password">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "At least 4 characters"
                }
              })}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          </div>

          <button className="submit" type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
      )}

      {!loggedInUser && (
        <p>
          {isLogin ? "Mere pass Account nhi hai?" : "Mere pass Account hai?"}
          <button className="set" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      )}
    </div>
  );
}

export default Nxt;
