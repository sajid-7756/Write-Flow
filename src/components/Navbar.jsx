import Link from "next/link";
import React from "react";
import MyContainer from "./MyContainer";
import { auth } from "@/auth";
import Image from "next/image";
import Logout from "./Logout";

export default async function Navbar() {
  const session = await auth();

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/add-blogs"}>Add Blogs</Link>
      </li>
      <li>
        <Link href={"/manage-blogs"}>Manage Blogs</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm sticky z-50 top-0 bg-white/30 ">
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
          <Link href={"/"} className="text-xl font-bold">
            WriteFlow
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {session?.user ? (
            <details className="dropdown">
              <summary className="m-1 btn">
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                <li>
                  <Logout></Logout>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          ) : (
            <div className="space-x-2">
              <Link href={"/login"} className="btn btn-outline btn-primary">
                Sign In
              </Link>
              <Link href={"/login"} className="btn btn-outline btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
}
