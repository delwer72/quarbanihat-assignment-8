

"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "animate.css";

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* About */}
        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-black">
            Qurbani Hat is a trusted platform for buying and selling qurbani animals.
          </p>
        </div>

        {/* Contact */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880 123400000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@qurbanihat.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:scale-110 transition duration-300 cursor-pointer" />
            <FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" />
            <FaLinkedin className="hover:scale-110 transition duration-300 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-gray-500 animate__animated animate__fadeIn animate__delay-3s">
        © {new Date().getFullYear()} Qurbani Hat
      </div>
    </footer>
  );
}