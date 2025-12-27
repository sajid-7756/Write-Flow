"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import MyContainer from "./MyContainer";
import Image from "next/image";
import Logout from "./Logout";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { HiOutlineUser, HiOutlinePlusCircle, HiOutlineViewGrid, HiOutlineLogout, HiMenu, HiX } from "react-icons/hi";
import { BsType } from "react-icons/bs";

export default function Navbar({ session }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Add Blogs", href: "/add-blogs" },
    { name: "Manage Blogs", href: "/manage-blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const links = (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-purple-600 ${
                isActive ? "text-purple-600" : "text-gray-600"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-4 right-4 h-0.5 bg-purple-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <MyContainer className="flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
              <HiMenu size={24} className="text-gray-700" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-3xl w-64 border border-gray-50 flex flex-col gap-2"
            >
              {links}
            </ul>
          </div>
          
          <Link href={"/"} className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
              <BsType size={20} className="font-bold" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                Write<span className="text-purple-600">Flow</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Journal</span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {session?.user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-transparent hover:border-purple-200 transition-all ring-offset-2 hover:ring-2 hover:ring-purple-100">
                <div className="w-9 rounded-full overflow-hidden">
                  <Image
                    width={36}
                    height={36}
                    src={session?.user?.image}
                    alt={session?.user?.name}
                  />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow-2xl menu menu-sm dropdown-content bg-white rounded-[2rem] w-64 border border-gray-50 overflow-hidden">
                <div className="px-5 py-4 bg-gray-50/50 mb-2 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src={session?.user?.image} width={40} height={40} alt="profile" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="font-bold text-gray-900 truncate">{session?.user?.name}</p>
                    <p className="text-[10px] text-gray-500 truncate">{session?.user?.email}</p>
                  </div>
                </div>
                
                <li>
                  <Link href="/user-info" className="flex items-center gap-3 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors">
                    <HiOutlineUser size={20} />
                    <span>User Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href="/add-blogs" className="flex items-center gap-3 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors">
                    <HiOutlinePlusCircle size={20} />
                    <span>Create New Story</span>
                  </Link>
                </li>
                <li>
                  <Link href="/manage-blogs" className="flex items-center gap-3 py-3 px-4 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors">
                    <HiOutlineViewGrid size={20} />
                    <span>Content Manager</span>
                  </Link>
                </li>
                
                <div className="my-2 border-t border-gray-100"></div>
                
                <li className="px-2">
                  <Logout></Logout>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              href={"/login"}
              className="btn bg-gray-900 hover:bg-black text-white px-8 rounded-2xl border-none shadow-xl shadow-gray-200"
            >
              Get Started
            </Link>
          )}
        </div>
      </MyContainer>
    </motion.div>
  );
}

