// components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WriteFlow</h2>
        <p className="text-lg text-gray-600 mb-12">
          Empower your voice with simplicity, speed, and security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature: Simplicity */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="text-purple-500 text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
            <p className="text-gray-600">
              Write and publish effortlessly with a clean, distraction-free interface.
            </p>
          </div>

          {/* Feature: Speed */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="text-blue-500 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Speed</h3>
            <p className="text-gray-600">
              Lightning-fast performance so your words reach your audience instantly.
            </p>
          </div>

          {/* Feature: Security */}
          <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="text-green-500 text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Your content is protected with best-in-class privacy and data security.
            </p>
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center shadow-md">
            <span className="text-purple-500 text-xl font-semibold">
              [ Illustration: Blog Benefits ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
