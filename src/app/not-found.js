"use client";
import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex items-center justify-center min-h-screen p-6">
      <div className="text-center bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 shadow-lg rounded-xl p-10 max-w-md w-full">
        {/* Big 404 */}
        <h1 className="text-6xl font-extrabold text-indigo-500 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Action Button */}
        <Link href="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
