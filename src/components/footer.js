import React from "react";
// import { Link } from "react-router-dom";
import vneed from '../assets/images/vneed.jpg'

export default function Footer(){
    return(
        <footer className="bg-teal-900 text-white py-12 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-8">
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
            src={vneed}
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
          © 2012 - 2025 Vneed Pay, Inc. All rights reserved.
        </p>
      </div>
    </footer>
    )
}