import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

export default async function UserInfoPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">No user session found.</p>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <Image
            src={user.image || "/fallback.jpg"}
            alt={user.name || "User"}
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-200 object-cover"
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
        <p className="text-gray-600 mt-2">{user.email}</p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>
      </div>
    </section>
  );
}
