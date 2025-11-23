import Image from "next/image";

// components/TestimonialSection.jsx
export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Writers Say
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Trusted by creators, bloggers, and storytellers around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                width={0}
                height={0}
                src="https://i.pravatar.cc/100?img=32"
                alt="User 1"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Amina Rahman</h3>
                <p className="text-sm text-gray-500">Travel Blogger</p>
              </div>
            </div>
            <p className="text-gray-700">
              “WriteFlow makes publishing feel effortless. I love how clean and
              fast everything is.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                width={0}
                height={0}
                src="https://i.pravatar.cc/100?img=45"
                alt="User 2"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Jason Lee</h3>
                <p className="text-sm text-gray-500">Tech Writer</p>
              </div>
            </div>
            <p className="text-gray-700">
              “The speed and simplicity of WriteFlow helped me grow my audience
              faster than ever.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-slate-50 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                width={0}
                height={0}
                src="https://i.pravatar.cc/100?img=12"
                alt="User 3"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Nadia Chowdhury</h3>
                <p className="text-sm text-gray-500">Poet & Essayist</p>
              </div>
            </div>
            <p className="text-gray-700">
              “I feel safe sharing my work here. The platform is secure and
              beautifully designed.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
