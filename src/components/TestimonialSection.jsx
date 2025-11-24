import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Writers Say
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Trusted by creators, bloggers, and storytellers around the world.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial Card */}
          {[
            {
              name: "Amina Rahman",
              role: "Travel Blogger",
              avatar: "https://i.pravatar.cc/100?img=32",
              quote:
                "WriteFlow makes publishing feel effortless. I love how clean and fast everything is.",
            },
            {
              name: "Jason Lee",
              role: "Tech Writer",
              avatar: "https://i.pravatar.cc/100?img=45",
              quote:
                "The speed and simplicity of WriteFlow helped me grow my audience faster than ever.",
            },
            {
              name: "Nadia Chowdhury",
              role: "Poet & Essayist",
              avatar: "https://i.pravatar.cc/100?img=12",
              quote:
                "I feel safe sharing my work here. The platform is secure and beautifully designed.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-linear-to-tr from-indigo-100 via-pink-50 to-purple-100 rounded-xl shadow-md p-8 text-left hover:shadow-xl hover:-translate-y-1 transition transform flex flex-col"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex items-start gap-2 text-gray-700">
                <FaQuoteLeft className="text-purple-400 text-xl mt-1" />
                <p className="italic leading-relaxed">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
