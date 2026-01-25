import React from "react";
import { Cpu, Phone, Monitor, Camera } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "High-End Computers",
    desc: "Latest desktops and laptops for gaming, work, and creative needs.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Phone,
    title: "Smartphones",
    desc: "Get the newest smartphones with the best deals and warranties.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Monitors & Displays",
    desc: "High-quality monitors for work, gaming, and entertainment.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Camera,
    title: "Cameras & Accessories",
    desc: "Capture every moment with our premium cameras and accessories.",
    color: "from-yellow-400 to-yellow-600",
  },
];

const Service = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-500 mb-16 text-sm sm:text-base max-w-2xl mx-auto">
          We provide top-quality electronics to meet all your tech needs. Explore our services and find the perfect fit for your lifestyle.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4 cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Gradient Circle Icon */}
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white mb-4 shadow-lg`}
                >
                  <Icon size={36} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-center text-sm sm:text-base">
                  {service.desc}
                </p>

                {/* Hover Overlay for Premium Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-transparent opacity-0 hover:opacity-20 transition-all rounded-2xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
