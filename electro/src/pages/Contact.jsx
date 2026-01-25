import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    toast.success("Message sent successfully! 🚀");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <ToastContainer position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-gray-500" />
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              rows={4}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
