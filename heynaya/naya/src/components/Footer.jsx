// File: src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-amber-50 mt-20 border-t border-amber-200">

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Logo + Description */}
                <div>
                    <img src={logo} alt="Antique Store Logo" className="h-14 mb-4" />

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Curators of rare artifacts, jewelry, maps & historical treasures.  
                        Every item tells a story preserved through centuries.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-5 text-gray-700">
                        <a href="#" className="hover:text-amber-700 text-xl"><FaFacebookF /></a>
                        <a href="#" className="hover:text-amber-700 text-xl"><FaInstagram /></a>
                        <a href="#" className="hover:text-amber-700 text-xl"><FaYoutube /></a>
                    </div>
                </div>

                {/* Collections */}
                <div>
                    <h3 className="font-semibold text-amber-900 mb-4">Collections</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-amber-700">Ancient Jewelry</a></li>
                        <li><a href="#" className="hover:text-amber-700">Historic Maps</a></li>
                        <li><a href="#" className="hover:text-amber-700">Vintage Sculptures</a></li>
                        <li><a href="#" className="hover:text-amber-700">Rare Documents</a></li>
                        <li><a href="#" className="hover:text-amber-700">Collector Cards</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-semibold text-amber-900 mb-4">Customer Support</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-amber-700">Shipping & Delivery</a></li>
                        <li><a href="#" className="hover:text-amber-700">Return Policy</a></li>
                        <li><a href="#" className="hover:text-amber-700">Authentication Process</a></li>
                        <li><a href="#" className="hover:text-amber-700">FAQs</a></li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-semibold text-amber-900 mb-4">About</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-amber-700">Our Story</a></li>
                        <li><a href="#" className="hover:text-amber-700">The History Behind Items</a></li>
                        <li><a href="#" className="hover:text-amber-700">Meet the Curators</a></li>
                        <li><a href="#" className="hover:text-amber-700">Press & Media</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-6 text-sm text-gray-700 bg-amber-100 border-t border-amber-200">
                © {new Date().getFullYear()} Naya AI Trauma-Informed.
            </div>
        </footer>
    );
}
