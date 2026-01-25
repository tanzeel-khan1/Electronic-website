import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("signupData"));
  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("signupData");
    window.location.href = "/login";
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm p-8 sm:p-10 rounded-2xl 
          bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Access Restricted
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Please login to view your profile information.
          </p>
          <button
            onClick={() => (window.location.href = "/login")}
            className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Go to Login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:mt-0 mt-18 bg-gray-100 flex items-center justify-center px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl rounded-2xl 
        bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center text-2xl sm:text-3xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{user.email}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="p-4 sm:p-6 rounded-xl border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <FaUser className="text-gray-500" />
                <span>{user.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-500" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="p-4 sm:p-6 rounded-xl border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              Account Details
            </h3>
            <div className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <p>
                Account Status:{" "}
                <span className="font-medium text-green-600">Active</span>
              </p>
              <p>
                Role: <span className="font-medium">User</span>
              </p>
              <p>
                Member Since:{" "}
                <span className="font-medium">{new Date().getFullYear()}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-center sm:justify-end">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 
            bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
