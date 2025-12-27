"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 z-100 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      style={{ 
        scaleX,
        transformOrigin: "left"
      }}
    />
  );
};

export default ReadingProgressBar;
