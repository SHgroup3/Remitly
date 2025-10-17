// Simplified React component using Tailwind CSS
import React from 'react';

const RemitlyBusinessContent = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-12">
      <div className="max-w-7xl w-full mx-auto">
        {/* Trustpilot/Review Section - Simple replication */}
        <div className="text-center mb-10">
          <p className="text-lg font-medium text-green-700">Excellent</p>
          <div className="flex justify-center items-center space-x-1 mt-1">
            {/* Stars - using text for simplicity */}
            <span className="text-2xl text-green-500">★★★★★</span>
            <span className="text-gray-600">63,147 reviews on</span>
            <span className="font-bold text-gray-800">Trustpilot</span>
          </div>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column: Text and CTA */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Simplify payments with <br className="hidden sm:inline" />
              <span className="text-teal-700">Remitly Business</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Whether paying overseas teams, vendors, or invoices, Remitly makes moving money fast and easy and is backed by dedicated support.
            </p>
            <p className="text-lg font-semibold text-gray-700 mb-8">
              Get a special promotion on your first transfer.
            </p>
            <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-lg">
              Create Remitly Business account
            </button>
          </div>

          {/* Right Column: Images/Visuals */}
          <div className="order-1 lg:order-2 flex flex-col items-center space-y-4 sm:space-y-6">
            {/* Top Image & Right Image Container - arranged side-by-side or stacked */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Top Image (Two people) */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                {/* Placeholder for top-left image */}
                <span className="text-sm text-gray-500">Image 1</span>
              </div>

              {/* Middle Image/Card (Setup your business account) */}
              <div className="w-48 h-64 sm:w-64 sm:h-80 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 flex flex-col justify-between">
                {/* Placeholder content for the card */}
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="font-bold text-xl mb-2">Set up your business account</h3>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-teal-700 text-white py-2 px-6 rounded-lg mb-2 w-full">Continue</button>
                  <p className="text-xs text-gray-500">Encrypted experiences</p>
                </div>
              </div>
            </div>

            {/* Bottom Image (Person in warehouse) - positioned below the top two */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-xl self-end sm:self-auto flex items-center justify-center">
              {/* Placeholder for bottom-right image */}
              <span className="text-sm text-gray-500">Image 3</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RemitlyBusinessContent;