"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ideas? We’d love to hear from you. Reach out to our team
            and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <FaPhoneAlt className="text-3xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>
          <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <FaEnvelope className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@writeflow.com</p>
          </div>
          <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 hover:shadow-xl transition">
            <FaMapMarkerAlt className="text-3xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Bogra, Rajshahi, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-10 max-w-3xl mx-auto">
          <form className="flex flex-col gap-6">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-fit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
