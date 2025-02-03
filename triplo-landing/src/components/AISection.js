import React from 'react';

function AISection() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Our AI knows good design.
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Go from idea to interface in seconds. Then, bring it to life with AI at your fingertips. 
          Our AI makes everything better & faster.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Smart Components</h3>
            <p className="text-lg opacity-90">
              AI-powered components that adapt to your design system and brand guidelines.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Intelligent Layout</h3>
            <p className="text-lg opacity-90">
              Let AI suggest the best layout for your content and components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISection; 