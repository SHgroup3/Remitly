import React from "react";
// import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-teal-900 text-white py-12 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="https://blog.remitly.com" className="hover:text-gray-300">Blog</a></li>
            <li><a href="https://news.remitly.com" className="hover:text-gray-300">Newsroom</a></li>
            <li><a href="https://careers.remitly.com" className="hover:text-gray-300">Careers</a></li>
            <li><a href="https://ir.remitly.com" className="hover:text-gray-300">Investors</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/send-money" className="hover:text-gray-300">Send Money</a></li>
            <li><a href="/business" className="hover:text-gray-300">Remitly Business</a></li>
            <li><a href="/login" className="hover:text-gray-300">Log In</a></li>
            <li><a href="/signup" className="hover:text-gray-300">Sign Up</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/rates" className="hover:text-gray-300">Rates & Fees</a></li>
            <li><a href="/swift-codes" className="hover:text-gray-300">Swift Codes</a></li>
            <li><a href="/partners" className="hover:text-gray-300">Partners</a></li>
            <li><a href="/reviews" className="hover:text-gray-300">Reviews</a></li>
            <li><a href="/refer" className="hover:text-gray-300">Refer Friends</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="/security" className="hover:text-gray-300">Security</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Notice</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/Remitly" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-6 h-6 hover:opacity-80"/>
            </a>
            <a href="https://x.com/remitly" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="X" className="w-6 h-6 hover:opacity-80"/>
            </a>
          </div>
          <p className="text-sm mb-3">Scan the code to get the app</p>
          <img
            src="https://cdn.remitly.com/images/v1/img/qr_code_tue_feb_06_2024.bD56TI2smTyVsGd5.png"
            alt="QR Code"
            className="w-20 h-20 mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
          {/* Logo */}
          <img
            src="https://media.remitly.io/remitly_logo_horizontal_white_tu.zrhAxFCrR5s4IlKb.svg"
            alt="Remitly"
            className="w-40 mb-4 md:mb-0"
          />

          {/* Bottom Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <li><a href="/agreement" className="hover:text-white">User Agreement</a></li>
            <li><a href="/licenses" className="hover:text-white">Licenses</a></li>
            <li><a href="/accessibility" className="hover:text-white">Accessibility</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm mt-6">
          © 2012 - 2025 Remitly, Inc. All rights reserved.
        </p>
      </div>
    </footer>
    )
}