import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // for mobile menu icons

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-16 py-8 bg-white shadow-sm">
        {/* Left Side: Logo + Personal/Business */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Logo */}
              <div className="flex items-center space-x-2">
          <div class="f1tgjws2 f1809e9f"><svg xmlns="http://www.w3.org/2000/svg" width="135" height="32" viewBox="0 0 135 32" fill="none"><g clip-path="url(#clip0_1983_19550)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1731 17.726L14.635 10.113C14.1037 9.72976 13.3848 9.72976 12.8543 10.113L8.15747 13.5056C7.88313 13.7032 7.54814 13.7835 7.21375 13.7308C6.87916 13.6784 6.58567 13.4995 6.38635 13.2267C6.18704 12.9543 6.10663 12.621 6.1599 12.2887C6.21297 11.9562 6.39254 11.664 6.66687 11.466L9.99702 9.06021H9.99782L12.8968 6.96587C14.5165 5.7952 16.7493 5.94042 18.1978 7.31264C18.5178 7.61657 19.0168 7.63522 19.3747 7.37613L25.1731 3.18764V17.726ZM25.0404 20.7018L25.0253 20.8024C24.9898 21.0224 24.8425 21.3398 24.6807 21.4928C24.2543 21.8971 23.6294 21.929 23.1749 21.6003L18.0312 17.8808L17.9937 17.8542C17.6818 17.6284 17.1725 17.6312 16.8888 17.8913C16.476 18.27 16.53 18.904 16.9602 19.2145L17.0232 19.2599L21.7406 22.668C22.003 22.858 22.1967 23.1389 22.2412 23.4595C22.3033 23.9019 22.1235 24.3179 21.7711 24.5729L21.663 24.6512C21.2526 24.9474 20.6969 24.9474 20.2863 24.6512L14.4361 20.4243C14.1242 20.1995 13.6139 20.2017 13.3308 20.4616C12.9174 20.8411 12.972 21.4741 13.4018 21.7846L18.1822 25.2381C18.4454 25.4283 18.6383 25.7094 18.6826 26.0298C18.7457 26.473 18.5661 26.888 18.2131 27.1435L18.1044 27.2217C17.6942 27.5181 17.1383 27.5181 16.7283 27.2217L15.6625 26.4514L10.8777 22.9949C10.5658 22.7696 10.0561 22.7727 9.77276 23.0326C9.35896 23.4111 9.41403 24.0448 9.84379 24.3552L14.6242 27.8091C14.887 27.9988 15.0799 28.2801 15.1252 28.5999C15.1873 29.0433 15.0077 29.4591 14.6546 29.714L14.5496 29.7902C14.1819 30.0554 13.7021 30.0832 13.3096 29.8741L1.86908 21.6088V3.18764L6.84065 6.77978L8.40766 7.91117L5.56813 9.96306C4.89037 10.4519 4.44545 11.175 4.31456 11.9981C4.18268 12.8206 4.3818 13.6447 4.87481 14.3192C5.36702 14.9929 6.09366 15.4355 6.92106 15.5666C7.08726 15.5926 7.25346 15.6057 7.41846 15.6057C8.07567 15.6057 8.71412 15.401 9.25621 15.0094L13.2274 12.1407C13.5359 11.9177 13.9532 11.9177 14.2613 12.1407L24.6807 19.6712C24.9644 19.9329 25.1011 20.3149 25.0404 20.7018ZM23.834 1.85787L19.1116 5.26948C18.9673 5.37364 18.771 5.38355 18.6214 5.28635C16.7002 4.04168 14.2003 3.98673 12.2115 5.18993C12.151 5.21671 12.0926 5.24865 12.0367 5.28873L9.99662 6.76292L3.20804 1.85787H23.834ZM26.7681 0.271785C26.5935 0.097207 26.3555 0 26.1073 0H0.934341C0.418189 0 0 0.415813 0 0.928438V22.0822C0 22.3795 0.143454 22.6587 0.384671 22.8336L12.4938 31.5842H12.4944C13.1063 32.0266 13.9357 32.0266 14.5478 31.5842L26.6565 22.8366C26.8987 22.661 27.0422 22.3821 27.0422 22.0849V0.929233C27.0422 0.68284 26.9438 0.446562 26.7681 0.271785Z" fill="#2C415A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M99.1119 8.5242C99.2819 8.5242 99.4193 8.66352 99.4193 8.8337V21.8936C99.4193 22.0643 99.2819 22.2025 99.1119 22.2025H94.9547C94.7849 22.2025 94.6471 22.0643 94.6471 21.8936V8.8337C94.6471 8.66352 94.7849 8.5242 94.9547 8.5242H99.1119ZM118.001 4.55948C118.171 4.55948 118.309 4.69742 118.309 4.86791V21.8938C118.309 22.0637 118.171 22.2025 118.001 22.2025H113.844C113.675 22.2025 113.537 22.0637 113.537 21.8938V4.86791C113.537 4.69742 113.675 4.55948 113.844 4.55948H118.001ZM97.1326 1.78418C98.6151 1.78418 99.817 2.9823 99.817 4.45996C99.817 5.93803 98.6151 7.13655 97.1326 7.13655C95.6501 7.13655 94.4483 5.93803 94.4483 4.45996C94.4483 2.9823 95.6501 1.78418 97.1326 1.78418ZM134.811 10.2292C134.811 10.2335 134.813 10.2407 134.813 10.2448V22.4535C134.813 25.4112 133.539 27.455 130.758 28.4008C128.998 29.0002 127.324 29.0492 125.745 28.8041C125.583 28.7783 125.469 28.63 125.484 28.4684L125.798 24.8673C125.814 24.6811 125.979 24.5628 126.166 24.5933C126.666 24.6764 127.591 24.6847 127.602 24.6847C127.993 24.6962 128.358 24.5991 128.683 24.4347C128.699 24.4271 128.715 24.4188 128.731 24.4109C129.406 24.048 129.942 23.3574 129.967 22.5431V21.3287C129.967 20.7222 129.543 20.85 129.257 21.0715C128.357 21.7708 127.342 22.4478 125.874 22.4478C124.245 22.4478 123.007 21.7764 122.173 20.6791C121.694 20.0508 121.292 18.7235 121.292 15.9262V8.83232C121.292 8.6616 121.43 8.5242 121.602 8.5242H125.817C125.989 8.5242 126.129 8.6616 126.129 8.83232V15.9262C126.129 17.4123 126.867 18.1922 128.012 18.1922C129.158 18.1922 129.973 17.4123 129.973 15.9262V8.83232C129.973 8.6616 130.113 8.5242 130.285 8.5242H134.499C134.671 8.5242 134.811 8.6616 134.811 8.83232V10.2292ZM110.638 8.53884C110.812 8.53884 110.952 8.67599 110.952 8.84569V12.4043C110.952 12.5742 110.812 12.7112 110.638 12.7112H108.728C108.555 12.7112 108.414 12.8481 108.414 13.0178V16.9968C108.414 18.8174 109.89 18.5044 110.591 18.4018C110.781 18.3738 110.952 18.5157 110.952 18.7043V21.584C110.952 21.7183 110.86 21.818 110.733 21.8782C110.154 22.1519 108.757 22.4007 107.132 22.4007C104.911 22.4007 103.55 20.8309 103.55 18.8949V13.0178C103.55 12.8481 103.41 12.7112 103.237 12.7112H101.92C101.747 12.7112 101.607 12.5742 101.607 12.4043V8.84569C101.607 8.67599 101.747 8.53884 101.92 8.53884H103.237C103.41 8.53884 103.55 8.40111 103.55 8.232V4.86613C103.55 4.69702 103.691 4.55948 103.865 4.55948H108.101C108.274 4.55948 108.414 4.69702 108.414 4.86613V8.23239C108.414 8.40111 108.555 8.53884 108.728 8.53884H110.638ZM44.7783 13.0282C46.4574 13.0282 47.424 12.2217 47.424 10.9363V10.8859C47.424 9.50002 46.4069 8.79423 44.7525 8.79423H41.8331C41.6609 8.79423 41.5218 8.93216 41.5218 9.10234V12.7197C41.5218 12.89 41.6609 13.0282 41.8331 13.0282H44.7783ZM36.5859 4.86799C36.5859 4.69761 36.7249 4.55948 36.897 4.55948H45.0073C47.7299 4.55948 49.6123 5.26547 50.8084 6.47523C51.8517 7.48316 52.3856 8.84439 52.3856 10.5838V10.6337C52.3856 13.1922 51.0798 14.9342 49.0566 15.9023C48.8835 15.9845 48.82 16.1947 48.9282 16.3511L52.6371 21.7192C52.7781 21.9242 52.631 22.2025 52.3802 22.2025H47.4961C47.3557 22.2025 47.2245 22.1328 47.1468 22.017L43.8428 17.0951C43.7442 16.9474 43.5769 16.8593 43.398 16.8593H41.8331C41.6609 16.8593 41.5218 16.997 41.5218 17.1674V21.894C41.5218 22.0643 41.3818 22.2025 41.2101 22.2025H36.897C36.7249 22.2025 36.5859 22.0643 36.5859 21.894V4.86799ZM63.2382 13.764V13.7636C63.2382 12.4252 62.2555 11.3696 60.7932 11.3696C59.4368 11.3696 58.3871 12.4252 58.3871 13.7636V13.764C58.3871 13.934 58.5164 14.0715 58.6758 14.0715H62.9494C63.1088 14.0715 63.2382 13.934 63.2382 13.764ZM60.5851 8.12773C65.1736 8.12773 67.6049 11.4725 67.6049 15.4139V16.2959C67.6049 16.4667 67.4663 16.606 67.2956 16.606H58.5386L58.5372 16.6068H58.5283C58.3588 16.6068 58.2216 16.7449 58.2216 16.9149C58.2216 18.2528 59.4518 19.0659 61.0093 19.0659L61.0107 19.0645C61.0129 19.0645 61.0168 19.0659 61.0168 19.0659C61.8511 19.0659 62.4468 18.7451 62.9198 18.2522C63.0226 18.1462 63.1595 18.0805 63.3068 18.0805H66.968C67.1859 18.0805 67.3431 18.3037 67.2598 18.5049C66.2905 20.8387 64.1682 22.4007 60.5851 22.4007C56.582 22.4007 53.6861 19.3551 53.6861 15.4139C53.6861 11.4725 56.3277 8.12773 60.5851 8.12773ZM82.7489 10.0939C83.8995 8.88041 85.252 8.12773 87.1442 8.12773C90.0783 8.12773 91.8634 9.93464 91.8634 13.0965V21.6972C91.8634 21.8671 91.7234 22.0042 91.5513 22.0042H87.3293C87.1564 22.0042 87.0173 21.8671 87.0173 21.6972V14.6272C87.0173 13.1461 86.2768 12.3686 85.1288 12.3686C83.9813 12.3686 83.1391 13.1461 83.1391 14.6272V21.6972C83.1391 21.8671 82.999 22.0042 82.8271 22.0042H78.605C78.4319 22.0042 78.2924 21.8671 78.2924 21.6972V14.6272C78.2924 13.1461 77.5526 12.3686 76.4046 12.3686C75.2565 12.3686 74.4406 13.1461 74.4406 14.6272V21.6972C74.4406 21.8671 74.3007 22.0042 74.1282 22.0042H69.9057C69.7331 22.0042 69.5933 21.8671 69.5933 21.6972V8.73635C69.5933 8.56621 69.7331 8.42908 69.9057 8.42908H74.1384C74.3053 8.42908 74.4406 8.56187 74.4406 8.72568V9.69237C74.4406 9.91685 74.7263 10.0131 74.8688 9.8386C75.6889 8.83931 76.9441 8.18226 78.3615 8.1295C78.4252 8.12812 78.4869 8.12773 78.5473 8.12773C80.2595 8.12773 81.5948 8.82607 82.3678 10.0589C82.4506 10.1923 82.6397 10.2091 82.7489 10.0939Z" fill="#2C415A"></path></g><defs><clipPath id="clip0_1983_19550"><rect width="134.737" height="32" fill="white">
          </rect></clipPath></defs></svg></div>
          
        </div>

          {/* Personal | Business Buttons */}
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

        {/* Hamburger (Mobile) */}
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

        {/* Right Side */}
        <div
          className={`flex-col sm:flex-row sm:flex items-center sm:space-x-4 text-lg font-bold absolute sm:static bg-white sm:bg-transparent left-0 w-full sm:w-auto px-6 sm:px-0 pb-4 sm:pb-0 transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "top-16 opacity-100 visible"
              : "top-[-500px] opacity-0 invisible sm:visible sm:opacity-100"
          }`}
        >
          {/* Flags and Language */}
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

          {/* Auth Buttons */}
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

      {/* Submenu (Personal / Business) */}
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
                to="/make-payments"
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
