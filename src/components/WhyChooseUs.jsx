"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFileAlt,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaEdit
} from "react-icons/fa";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const features = [
    {
      title: "Simplicity",
      description: "Write and publish effortlessly with a clean, distraction-free interface designed for creators.",
      icon: <FaEdit className="text-purple-500" />,
      bg: "bg-purple-50"
    },
    {
      title: "Speed",
      description: "Lightning-fast performance so your words reach your audience instantly without any lag.",
      icon: <FaRocket className="text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Security",
      description: "Your content is protected with best-in-class privacy and data security standards.",
      icon: <FaShieldAlt className="text-green-500" />,
      bg: "bg-green-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-4">
            Our Edge
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose WriteFlow
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Empower your voice with a platform built for simplicity, speed, and security.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-purple-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 p-12 lg:p-20 text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">Ready to transform your writing experience?</h3>
              <p className="text-purple-100 text-lg lg:text-xl">Join thousands of creators who trust WriteFlow to share their stories with the world.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-purple-900/20"
              >
                Start Writing Free
              </motion.button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[FaLaptopCode, FaFileAlt, FaLightbulb, FaCheckCircle].map((Icon, i) => (
                 <motion.div 
                   key={i}
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                   className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/20"
                 >
                   <Icon className="text-4xl opacity-80" />
                   <span className="text-xs font-bold uppercase tracking-wider opacity-60">Level {i+1}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

