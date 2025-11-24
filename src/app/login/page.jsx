import React from "react";
import { doSocialLogin } from "../actions";

export default function Login() {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center h-120">
      <h1 className="text-3xl font-semibold text-primary">Login with google</h1>
      <form
        action={doSocialLogin}
        className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 p-8 rounded-xl shadow-md h-52 flex justify-center items-center"
      >
        <button
          type="submit"
          name="action"
          value="google"
          className="flex items-center gap-3 btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md transition px-6 py-3 rounded-lg"
        >
          {/* Google Logo */}
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

          {/* Button Text */}
          <span className="font-medium">Login with Google</span>
        </button>
      </form>
    </div>
  );
}
