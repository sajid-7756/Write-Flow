"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Amina Rahman",
      role: "Travel Blogger",
      avatar: "https://i.pravatar.cc/100?img=32",
      quote: "WriteFlow makes publishing feel effortless. I love how clean and fast everything is. It's transformed my workflow.",
    },
    {
      name: "Jason Lee",
      role: "Tech Writer",
      avatar: "https://i.pravatar.cc/100?img=45",
      quote: "The speed and simplicity of WriteFlow helped me grow my audience faster than ever. Highly recommended for professionals.",
    },
    {
      name: "Nadia Chowdhury",
      role: "Poet & Essayist",
      avatar: "https://i.pravatar.cc/100?img=12",
      quote: "I feel safe sharing my work here. The platform is secure and beautifully designed. A breath of fresh air for writers.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-4">
            Testimonials
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            What Writers Say
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who have found their home on WriteFlow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-purple-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full group"
            >
              <div className="flex gap-1 mb-8">
                 {[...Array(5)].map((_, i) => (
                   <FaStar key={i} className="text-yellow-400 text-sm" />
                 ))}
              </div>

              <div className="relative mb-8 text-gray-700">
                <FaQuoteLeft className="absolute -top-4 -left-4 text-purple-100 text-6xl group-hover:text-purple-200 transition-colors" />
                <p className="relative z-10 text-lg leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-auto flex items-center gap-5 pt-8 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                   <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                  <p className="text-sm text-purple-600 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

