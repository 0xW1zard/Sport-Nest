import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#2a5c3a] text-white py-10 px-4 w-full border-t border-[#1e452a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              SportNest
            </h2>
            <p className="text-green-100/70 text-sm">
              High-Performance Booking.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-sm text-green-100/90 font-medium">
              <li className="flex items-center gap-3">
                <MdLocationOn className="w-5 h-5 text-green-300" />
                <span>Level 4, Sipora Tower, Dhanmondi, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="w-5 h-5 text-green-300" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="w-5 h-5 text-green-300" />
                <span>hello@sportnest.com.bd</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col md:items-end justify-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-green-100/90">
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-[#3e7a52] flex flex-col md:flex-row justify-between items-center text-xs text-green-100/60">
          <p>© {new Date().getFullYear()} SportNest. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;