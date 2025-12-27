"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineHeart, HiOutlineReply } from "react-icons/hi";

const CommentItem = ({ comment, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex gap-4">
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={comment.authorAvatar || "https://i.pravatar.cc/100"}
              alt={comment.author}
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-50/50 rounded-2xl px-5 py-4 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-gray-900 text-sm">
                {comment.author}
              </h4>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                {comment.time}
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
              {comment.text}
            </p>
          </div>
          
          <div className="flex gap-4 mt-2 ml-2">
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-red-500 transition-colors">
              <HiOutlineHeart size={16} />
              <span>Like</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-purple-600 transition-colors">
              <HiOutlineReply size={16} />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line for nested comments structure (UI only) */}
      <div className="ml-5 h-8 border-l-2 border-gray-50 my-2 last:hidden"></div>
    </motion.div>
  );
};

export default CommentItem;
