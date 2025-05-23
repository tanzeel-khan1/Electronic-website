import { useState } from "react";
import { useForm } from "react-hook-form";

function Next() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUser, setLoggedUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const getUser = () => JSON.parse(localStorage.getItem("users")) || [];

  const onSubmit = (data) => {
    let users = getUser();

    if (isLogin) {
      const foundUser = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (foundUser) {
        setLoggedUser(foundUser.name);
        alert(`Welcome ${foundUser.name}`);
      } else {
        alert("Incorrect credentials");
      }
    } else {
      const emailExists = users.some((user) => user.email === data.email);
      if (emailExists) {
        alert("User already exists");
      } else {
        const newUser = {
          name: data.name,
          email: data.email,
          password: data.password
        };
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setIsLogin(true);
        alert("Signup successful");
        reset();
      }
    }
  };

  return (
    <div id="main">
      <h2 >{isLogin ? "Login" : "Signup"} </h2>
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
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                  }
                })}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
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
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="password">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <button className="submit" type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
      )}

      {!loggedInUser && (
        <p>
          {isLogin ? "Mere pass Account nahi hai?" : "Mere pass Account hai?"}
          <button className="set" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      )}
    </div>
  );
}

export default Next;
