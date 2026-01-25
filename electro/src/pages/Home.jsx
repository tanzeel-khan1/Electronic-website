
import React from "react";
import { motion } from "framer-motion";
import Footer from "../pages/Footer";
const Home = () => {
  // Variants for animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
   <>
    <section className="relative bg-white text-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1470&q=80"
          alt="Electronics Store"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col items-start gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          variants={textVariant}
        >
          Upgrade Your <span className="text-blue-800">Tech Life</span>
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          variants={textVariant}
        >
          With <span className="text-blue-800">ShopEase</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 max-w-xl"
          variants={textVariant}
        >
          Explore the latest electronics, gadgets, and accessories. Quality and
          innovation that fits your lifestyle.
        </motion.p>

        <motion.div className="mt-6 flex gap-4" variants={textVariant}>
          <motion.button
            className="bg-blue-800 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black transition flex items-center gap-2"
            variants={buttonVariant}
          >
            Shop Now →
          </motion.button>
          <motion.button
            className="cursor-pointer border border-gray-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            variants={buttonVariant}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>

   </>
  );
};

export default Home;
