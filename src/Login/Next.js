import { useState } from "react";
import { useForm } from "react-hook-form";

function Next(){
    const [isLogin, setIsLogin] = useState(true);
    const [loggedInUser, setLoggedUser] = useState(null);
  
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
    } = useForm();

    const getUsers = () => JSON.parse(localStorage.getItem("user")) || [];

    const onSubmit = (data) => {
        let users = getUsers();

        if(isLogin) {
            const foundUser = users.find(
            (user) => user.email === data.email && user.password === data.password
            );
        if(foundUser){
            setLoggedUser(foundUser.name);
            alert(`wellcome ${foundUser.name}`);
        }else{
            alert("Not Current");
        }
        }else{
            const emailExit = users.some ((user) => user.email === data.email);
            if(emailExit){
            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password
            };
            const updatedUser = {... users, newUser};
            localStorage.setItem("user", JSON.stringify(updatedUser))
             alert("Signup Successful");
        setIsLogin(true);
        reset();
            }
        }
    }

    return(
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
    )
}
export default Next;