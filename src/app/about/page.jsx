import React from "react";
import { FaUsers, FaLightbulb, FaRocket, FaShieldAlt, FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-purple-600">WriteFlow</span>, we believe
            every voice deserves to be heard. Our mission is to empower writers, creators,
            and storytellers with tools that combine simplicity, speed, and security.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We aim to create a platform where ideas flow freely, enabling writers to
              share their stories with the world. WriteFlow is built to be fast, intuitive,
              and accessible — so you can focus on what matters most: your creativity.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted blogging platform globally, fostering a community
              where knowledge, inspiration, and collaboration thrive.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.ibb.co.com/Jjvc91j9/be1c0e59-9d14-4c37-b01a-9e9bd46ec3dc.jpg"
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaUsers className="text-4xl text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We grow together by sharing, supporting, and inspiring one another.</p>
            </div>
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaLightbulb className="text-4xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace creativity and constantly evolve to meet modern needs.</p>
            </div>
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaRocket className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for quality in every feature, design, and interaction.</p>
            </div>
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaLightbulb className="text-4xl text-amber-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace creativity and constantly evolve to meet modern needs.</p>
            </div>
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaShieldAlt className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Your content and privacy are always protected with top‑tier safeguards.</p>
            </div>
            <div className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
              <FaHeart className="text-4xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">We love what we do and pour that energy into empowering creators.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <Image
                src="https://i.pravatar.cc/150?img=1"
                alt="Sajid Ahmed"
                width={120}
                height={120}
                className="rounded-full shadow-md"
              />
              <h3 className="mt-4 font-semibold text-gray-800">Sajid Ahmed</h3>
              <p className="text-sm text-gray-500">Founder & Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://i.pravatar.cc/150?img=2"
                alt="Team Member"
                width={120}
                height={120}
                className="rounded-full shadow-md"
              />
              <h3 className="mt-4 font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://i.pravatar.cc/150?img=3"
                alt="Team Member"
                width={120}
                height={120}
                className="rounded-full shadow-md"
              />
              <h3 className="mt-4 font-semibold text-gray-800">John Smith</h3>
              <p className="text-sm text-gray-500">Backend Engineer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
          <p className="text-lg text-gray-600 mb-6">
            Be part of a growing community of creators who are shaping the future of blogging.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
