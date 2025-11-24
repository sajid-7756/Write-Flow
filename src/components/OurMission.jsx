// components/OurMission.jsx
import { FaFeatherAlt, FaBolt, FaUsers } from "react-icons/fa";

export default function OurMission() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon + Heading */}
        <div className="flex justify-center mb-6">
          <FaFeatherAlt className="text-purple-500 text-5xl" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
          Our mission is to empower writers and creators by providing a simple,
          fast, and beautiful platform to share stories with the world.
        </p>

        {/* Supporting Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaBolt className="text-blue-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simplicity & Speed</h3>
            <p className="text-gray-600 text-sm">
              WriteFlow is designed to be lightning fast and distraction‑free,
              so your ideas flow naturally.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaUsers className="text-green-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Connect with fellow writers, share feedback, and grow together in
              a supportive environment.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaFeatherAlt className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600 text-sm">
              A platform that celebrates your voice and helps you craft stories
              that inspire readers worldwide.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <button className="btn btn-primary px-8 py-3 rounded-lg shadow-md">
          Start Writing Today
        </button>
      </div>
    </section>
  );
}
