import React from 'react';

function Testimonials() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Thousands of founders, designers, and developers build with Triplo.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Triplo completely transformed how we build our product. The speed is incredible."
            author="Sarah Chen"
            role="Product Designer"
            company="TechCorp"
          />
          <TestimonialCard
            quote="The AI features are mind-blowing. It's like having a design partner that never sleeps."
            author="Mike Johnson"
            role="Frontend Developer"
            company="StartupX"
          />
          <TestimonialCard
            quote="We cut our design-to-development time in half. Amazing tool, amazing team."
            author="Lisa Martinez"
            role="CEO"
            company="DesignFlow"
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <p className="text-lg mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-600">{role} at {company}</p>
      </div>
    </div>
  );
}

export default Testimonials; 