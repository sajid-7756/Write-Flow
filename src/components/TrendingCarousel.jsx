"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiFire } from "react-icons/hi";

const TrendingCarousel = ({ blogs }) => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [blogs]);

  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-950/30 text-orange-600 rounded-lg">
                <HiFire size={20} />
              </div>
              <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">
                Trending Now
              </span>
            </div>
            <h2 className="text-4xl font-black mb-4">
              Viral Stories You Can&apos;t Miss
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The most read, discussed, and shared stories from across our platform this week.
            </p>
          </div>
          <Link 
            href="/blogs" 
            className="group flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all"
          >
            Explore all stories <HiArrowRight />
          </Link>
        </div>

        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 px-2"
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                className="min-w-[320px] md:min-w-[400px] h-[450px] relative group overflow-hidden rounded-[2.5rem] shadow-xl shadow-purple-900/5"
              >
                <Image
                  src={blog.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                      {blog.category || "General"}
                    </span>
                    <span className="text-white/60 text-xs font-medium">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <Link href={`/blogs/${blog._id}`}>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       {blog.author?.image && (
                         <div className="w-8 h-8 rounded-full border border-white/30 overflow-hidden">
                           <Image 
                            src={blog.author.image} 
                            width={32} 
                            height={32} 
                            alt={blog.author.name} 
                          />
                         </div>
                       )}
                       <span className="text-white/80 text-sm font-medium">
                         {blog.author?.name || "Anonymous"}
                       </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
