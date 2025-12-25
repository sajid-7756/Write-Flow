import Link from "next/link";
import React from "react";
import MyContainer from "./MyContainer";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href={"/"} className="text-3xl font-black tracking-tight block">
              Write<span className="text-purple-600">Flow</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
              The modern platform for writers and creators to share their stories, build audiences, and inspire the world.
            </p>
            <div className="flex gap-4">
               {[FaTwitter, FaGithub, FaLinkedin, FaInstagram].map((Icon, idx) => (
                 <Link key={idx} href="#" className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-100 hover:bg-purple-50 transition-all">
                   <Icon size={18} />
                 </Link>
               ))}
            </div>
          </div>
          
          <div>
            <h6 className="text-gray-900 font-bold mb-6">Explore</h6>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/blogs" className="hover:text-purple-600 transition-colors">All Blogs</Link></li>
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-gray-900 font-bold mb-6">Resources</h6>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-purple-600 transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-purple-600 transition-colors">Writers Guide</Link></li>
              <li><Link href="#" className="hover:text-purple-600 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-purple-600 transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-gray-900 font-bold mb-6">Newsletter</h6>
            <p className="text-gray-500 text-sm mb-4">Get the latest stories delivered to your inbox.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-purple-500 text-sm transition-all"
              />
              <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© {currentYear} WriteFlow. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </MyContainer>
    </footer>
  );
}

