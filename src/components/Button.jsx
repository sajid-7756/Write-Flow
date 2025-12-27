"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton({ children }) {
    const router = useRouter()
  return (
    <div>
      <button onClick={() => router.back()} className="btn btn-primary btn-sm">
        {children}
      </button>
    </div>
  );
}
