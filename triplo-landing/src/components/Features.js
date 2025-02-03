import React from 'react';

function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Design with real components, not mockups.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Drag-and-drop"
            description="Easily create responsive designs with our intuitive interface"
          />
          <FeatureCard
            title="Custom components"
            description="Build and reuse your own components"
          />
          <FeatureCard
            title="Real-time collaboration"
            description="Work together in real-time with your team"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Features; 