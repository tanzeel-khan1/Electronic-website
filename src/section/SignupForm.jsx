import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(" http://localhost:7000/api/auth/signup", form);
      localStorage.setItem("signup_userId", res.data.userId);
      alert("Signup successful! Check your email for OTP.");
      navigate("/verify-otp");
    } catch (err) {
      setError(err?.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="username" placeholder="Username" onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required className="border p-2 rounded" />
        <input name="address" placeholder="Address" onChange={handleChange} required className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
