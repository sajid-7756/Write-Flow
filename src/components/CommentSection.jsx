
import React from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { getComments } from "@/lib/getComments";

const CommentSection =async ({ blogId, user }) => {
  const comments = await getComments(blogId)
  console.log(comments)

  return (
    <div className="max-w-4xl mx-auto mt-20 mb-20 px-4">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
          <HiOutlineChatAlt2 size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Discussion
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            {comments.length} Thoughts on this story
          </p>
        </div>
      </div>

      {/* Comment Form */}
      <CommentForm user={user} blogId={blogId} />

      {/* Comments List */}
      <div className="space-y-8">
        {comments.map((comment, index) => (
          <CommentItem key={comment._id} comment={comment} index={index} />
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-20 bg-gray-50/50 rounded-[2.5rem] border-2 border-dashed border-gray-100">
          <div className="text-5xl mb-4 opacity-50">💬</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">No comments yet</h3>
          <p className="text-gray-500">Be the first to start the conversation!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
