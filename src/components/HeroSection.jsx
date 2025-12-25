"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleGetStart = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10"
      >
        {/* Left Text Section */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-purple-600 font-bold tracking-widest text-sm uppercase">
              Start Your Journey
            </h2>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Unleash Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Inner Writer
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-lg leading-relaxed"
          >
            Join a community of thousands and start writing, sharing, and
            building your meaningful audience today with WriteFlow.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStart}
              className="btn btn-primary btn-lg rounded-2xl px-10 text-white shadow-lg shadow-purple-200"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStart}
              className="btn btn-outline btn-lg rounded-2xl px-10 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            >
              Browse Blogs
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 text-sm text-gray-400 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" width={32} height={32} />
                </div>
              ))}
            </div>
            <p>Joined by 10k+ creators this month</p>
          </motion.div>
        </div>

        {/* Right Illustration Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-3xl -rotate-6 scale-95 opacity-50"></div>
            
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80"
              alt="modern workplace"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Card Decorative Element */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Content Verified</p>
                  <p className="text-xs text-gray-500">Quality Assured</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

