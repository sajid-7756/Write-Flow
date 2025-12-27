"use client";

import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaLink, FaCheck } from "react-icons/fa";

const ShareButtons = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "bg-[#1DA1F2]",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "bg-[#4267B2]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "bg-[#0077b5]",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800">Share this post</h3>
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 ${link.color} text-white rounded-xl hover:opacity-90 transition-opacity text-sm font-medium`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          {copied ? <FaCheck className="text-green-400" /> : <FaLink />}
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
