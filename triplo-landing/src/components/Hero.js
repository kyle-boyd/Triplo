import React from 'react';

function Hero() {
  return (
    <div className="pt-32 pb-20 text-center">
      <h1 className="text-6xl font-bold mb-6">
        Design, meet code.
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Turn UI designs into live code in minutes
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium">
        Start for free
      </button>
      <p className="text-sm text-gray-500 mt-4">
        ⚡ Explore examples
      </p>
      <div className="mt-12 max-w-6xl mx-auto">
        <img 
          src="/images/Dashboard.jpg" 
          alt="Triplo Dashboard" 
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero; 