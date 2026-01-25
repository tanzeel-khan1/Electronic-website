import React from "react";
import { FaShippingFast, FaHeadset, FaLock, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShippingFast className="text-indigo-500 text-5xl mb-4" />,
    title: "Fast Delivery",
    description: "Receive your orders quickly with our reliable shipping partners.",
  },
  {
    icon: <FaHeadset className="text-indigo-500 text-5xl mb-4" />,
    title: "24/7 Support",
    description: "Our friendly support team is always ready to assist you.",
  },
  {
    icon: <FaLock className="text-indigo-500 text-5xl mb-4" />,
    title: "Secure Payments",
    description: "Shop safely with multiple secure payment options.",
  },
  {
    icon: <FaSmile className="text-indigo-500 text-5xl mb-4" />,
    title: "100+ Happy Clients",
    description: "Trusted by over 100 satisfied customers who love shopping with us.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto py-24 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About ShopEase
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At ShopEase, our mission is to provide the best online shopping experience.
            From fast delivery and secure payments to exceptional support, we strive to delight every customer.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300"
            whileHover={{ y: -10, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
