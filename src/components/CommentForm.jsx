"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { postComment } from "@/lib/postComment";
import { useParams } from "next/navigation";

const CommentForm = ({ user }) => {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);


    const newComment = {
      blogId: id,
      author: user?.name,
      authorAvatar: user?.image,
      text: comment,
    };

    const result = await postComment(newComment);

    if (result.ok) {
      console.log("Comment submitted successfully:", result.data);
      setComment("");
    } else {
      console.error("Failed to submit comment:", result.status);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-10">
      <div className="flex gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-purple-50">
            {user?.image ? (
              <Image src={user.image} alt={user.name} width={48} height={48} />
            ) : (
              <div className="w-full h-full bg-linear-to-tr from-purple-100 to-indigo-100 flex items-center justify-center text-purple-600 font-bold">
                {user?.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-purple-500/20 transition-all text-gray-700 placeholder-gray-400 resize-none min-h-[100px]"
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-400">
              Be respectful and follow our community guidelines.
            </p>
            <button
              type="submit"
              disabled={isSubmitting || !comment.trim()}
              className={`btn btn-primary rounded-2xl px-8 flex items-center gap-2 transition-all ${
                isSubmitting ? "opacity-70" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <HiOutlinePaperAirplane size={20} className="rotate-90" />
              )}
              {isSubmitting ? "Posting..." : "Post Comment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
