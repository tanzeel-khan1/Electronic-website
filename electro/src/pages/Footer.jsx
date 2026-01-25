import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ShopEase</h2>
          <p className="text-gray-600 mb-4">
            Your one-stop shop for electronics and gadgets. Quality products, fast delivery, and 24/7 support.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-indigo-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscribe</h3>
          <p className="text-gray-600 mb-4">
            Get updates about new products, offers, and promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
