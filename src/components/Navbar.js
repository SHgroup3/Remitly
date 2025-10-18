import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import vneed from '../assets/images/vneed.jpg'


export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-16 py-8 bg-white shadow-sm">
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={vneed}
          alt="vneed"
          className="w-30 h-10 rounded-full"/>
              <div className="flex items-center space-x-2">
          
        </div>


          <div className="flex bg-white text-black font-bold py-3 px-4 rounded-full items-center space-x-4 shadow-md">
            <span
              onClick={() =>
                setActive(active === "personal" ? null : "personal")
              }
              className={`cursor-pointer transition-transform duration-300 ${
                active === "personal"
                  ? "scale-110 font-semibold hover:bg-gray-200 rounded-full"
                  : "opacity-80"
              }`}
            >
              Personal
            </span>
            <div className="w-[2px] h-6 bg-gray-300" />
            <span
              onClick={() =>
                setActive(active === "business" ? null : "business")
              }
              className={`cursor-pointer transition-transform duration-300 ${
                active === "business"
                  ? "scale-110 font-semibold hover:bg-gray-200"
                  : "opacity-80"
              }`}
            >
              Business
            </span>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden focus:outline-none"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-7 w-7 text-gray-700" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-700" />
          )}
        </button>

        <div
          className={`flex-col sm:flex-row sm:flex items-center sm:space-x-4 text-lg font-bold absolute sm:static bg-white sm:bg-transparent left-0 w-full sm:w-auto px-6 sm:px-0 pb-4 sm:pb-0 transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "top-16 opacity-100 visible"
              : "top-[-500px] opacity-0 invisible sm:visible sm:opacity-100"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <Menu as="div" className="relative inline-block mb-2 sm:mb-0">
              <MenuButton className="inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full">
                <img
                  src="https://flagcdn.com/w40/ca.png"
                  alt="Canada"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </Menu>

            <Menu as="div" className="relative inline-block mb-2 sm:mb-0">
              <MenuButton className="inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full">
                <img
                  src="https://flagcdn.com/w40/pk.png"
                  alt="Pakistan"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </Menu>

            <Menu as="div" className="relative inline-block mb-2 sm:mb-0">
              <MenuButton className="inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none rounded-full">
                English
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </Menu>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 sm:mt-0">
            <Link
              to="/help"
              className="text-gray-700 hover:text-teal-700 font-medium mb-2 sm:mb-0"
            >
              Help
            </Link>
            <button className="text-gray-700 hover:text-teal-700 font-medium mb-2 sm:mb-0">
              Log in
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          active ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex justify-left items-center bg-white py-3 space-x-8 shadow-inner ml-4 md:ml-8">
          {active === "personal" && (
            <>
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                Send Money
              </Link>
              <Link
                to="/loans"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                Rate and Fees
              </Link>
            </>
          )}
          {active === "business" && (
            <>
              <Link
                to="/payments"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                Make Payment
              </Link>
              <Link
                to="/loans"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                Rate and Fees
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
