import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./section/SignupForm";
import OtpVerifyForm from "./section/OtpVerifyForm";

const Home = () => (
  <div className="p-4">
    
    <h2 className="text-2xl font-bold mb-4">Welcome</h2>
    <p>Please <a href="/signup" className="text-blue-600 underline">Signup</a> to continue.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/verify-otp" element={<OtpVerifyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
