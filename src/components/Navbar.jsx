"use client";

import Link from "next/link";
import React from "react";
import MyContainer from "./MyContainer";
import Image from "next/image";
import Logout from "./Logout";
import { motion } from "framer-motion";

export default function Navbar({ session }) {
  const links = (
    <>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/"}>Home</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/blogs"}>Blogs</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/add-blogs"}>Add Blogs</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/manage-blogs"}>Manage Blogs</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/about"}>About</Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={"/contact"}>Contact</Link>
      </motion.li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="navbar sticky z-50 top-0 glass-nav shadow-sm"
    >
      <MyContainer className="flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black tracking-tight"
            >
              Write
              <span className="text-purple-600 transition-colors group-hover:text-purple-800">
                Flow
              </span>
            </motion.div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end">
          {session?.user ? (
            <details className="dropdown">
              <summary className="m-1 btn btn-ghost btn-circle avatar border-2 border-purple-100 hover:border-purple-300 transition-all">
                <div className="w-10 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    src={session?.user?.image}
                    alt={session?.user?.name}
                  />
                </div>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-48 mt-3 p-2 shadow-xl space-y-1">
                <li className="menu-title px-4 py-2 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Account
                  </span>
                </li>
                <li>
                  <Link href={"/user-info"}>User Info</Link>
                </li>
                <li>
                  <Link href={"/add-blogs"}>Add Blogs</Link>
                </li>
                <li>
                  <Link href={"/manage-blogs"}>Manage Blogs</Link>
                </li>
                <li className="mt-2 border-t border-gray-100 pt-2">
                  <Logout></Logout>
                </li>
              </ul>
            </details>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={"/login"}
                className="btn btn-primary btn-sm rounded-full px-6 text-white"
              >
                Sign In
              </Link>
            </motion.div>
          )}
        </div>
      </MyContainer>
    </motion.div>
  );
}

