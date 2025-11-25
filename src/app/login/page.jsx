"use client";
import React from "react";
import { doSocialLogin } from "../actions";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const STRONG_PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{8,20}$/;

  return (
    <div className="flex flex-col space-y-6 justify-center items-center min-h-screen p-4">
      <h1 className="text-4xl font-extrabold text-gray-800">Sign In</h1>

      <div className="bg-linear-to-tr from-indigo-50 via-pink-50 to-purple-50 p-8 sm:p-10 rounded-xl shadow-2xl flex flex-col items-center space-y-6 w-full max-w-xs sm:max-w-md">
        {/* Regular Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <fieldset className="w-full space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your Name"
              />
              {errors.name && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters.",
                  },
                  pattern: {
                    value: STRONG_PASSWORD_REGEX,
                    // CORRECTED AND POLISHED ERROR MESSAGE
                    message:
                      "Must include an uppercase, lowercase letter, a number, and a special character (!@#$%^&*-).",
                  },
                })}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="••••••••"
              />
              {errors.password && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full cursor-pointer mt-4 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Sign Up
            </button>
          </fieldset>
        </form>

        {/* OR Separator */}
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500 rounded-full">OR</span>
          </div>
        </div>

        {/* Google Login Button */}
        <form action={doSocialLogin} className="w-full">
          <button
            type="submit"
            name="action"
            value="google"
            className="w-full cursor-pointer flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-50 hover:shadow-md transition"
          >
            {/* Google Logo SVG */}
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            <span className="font-medium">Continue with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}
