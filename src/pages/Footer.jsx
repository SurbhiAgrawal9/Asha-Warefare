import React from 'react';
import { Instagram, Facebook, Camera, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Asha Warefare</h2>
            <p className="text-gray-300 mb-8">
              Empowering communities and transforming lives through sustainable
              development and social welfare initiatives.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors" />
              <Facebook className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors" />
              <Camera className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors" />
              <Briefcase className="w-6 h-6 text-gray-300 hover:text-[#3B82F6] transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#3B82F6]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#3B82F6]">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Welfare Street</p>
              <p>Chelsea, NY 10001</p>
              <p>Email: info@ashawarefare.org</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#3B82F6]">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and events.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
              <button
                type="submit"
                className="w-full bg-[#3B82F6] text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2024 ASHA WAREFARES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;