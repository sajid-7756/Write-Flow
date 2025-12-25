"use client";

import { motion } from "framer-motion";
import { FaFeatherAlt, FaBolt, FaUsers, FaGlobeAmericas } from "react-icons/fa";

export default function OurMission() {
  const values = [
    {
      icon: <FaBolt className="text-blue-500" />,
      title: "Simplicity & Speed",
      description: "WriteFlow is designed to be lightning fast and distraction-free, so your ideas flow naturally from mind to page.",
      delay: 0.1
    },
    {
      icon: <FaUsers className="text-green-500" />,
      title: "Community First",
      description: "Connect with fellow writers, share meaningful feedback, and grow together in a supportive digital ecosystem.",
      delay: 0.2
    },
    {
      icon: <FaGlobeAmericas className="text-purple-500" />,
      title: "Global Reach",
      description: "A platform that celebrates diverse voices and helps you craft stories that inspire readers worldwide.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm"
          >
            <FaFeatherAlt className="text-purple-600 text-4xl" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Our Mission
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto"
          >
            We are dedicated to empowering writers and creators by providing a simple,
            fast, and beautiful platform to share stories that shape our world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: value.delay }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-500 group"
            >
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-black px-12 py-5 rounded-2xl shadow-2xl shadow-purple-200 transition-all hover:translate-y-[-2px] active:scale-95">
            Start Writing Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}

