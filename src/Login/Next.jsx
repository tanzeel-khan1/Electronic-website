import { useState, useEffect } from "react";

function Next() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [name, setName] = useState("");         // only used in signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Load users from localStorage
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = getUsers();

    if (isLogin) {
      // LOGIN LOGIC
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        setLoggedInUser(foundUser.name);
        alert(`Welcome, ${foundUser.name}`);
      } else {
        alert("Incorrect email or password");
      }
    } else {
      // SIGNUP LOGIC
      const emailExists = users.some((user) => user.email === email);

      if (emailExists) {
        alert("User already exists");
      } else {
        const newUser = { name, email, password };
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Signup successful");
        setIsLogin(true); // switch to login after signup
      }
    }

    // Reset form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {loggedInUser ? (
        <h3 >Hello, {loggedInUser}!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label>Name:</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
      )}

      {!loggedInUser && (
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      )}
    </div>
  );
}

export default Next;
