import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-[#1B365D] text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-8">
          <span className="text-[#3B82F6]">Welcome to</span> Asha Warefare
        </h1>
        <div className="h-1 w-32 bg-[#3B82F6] mx-auto mb-12"></div>
        <p className="text-2xl leading-relaxed max-w-5xl mx-auto">
          Our mission is to create and sustain a strong, effective community that acknowledges 
          and responds to the potential, achievements and interdependence of its diverse 
          members. Rooted in and primarily focused on the Chelsea neighborhood, we seek to 
          empower all individuals and families to achieve their highest potential, while 
          maintaining a priority focus on those in economic need.
        </p>
        <a 
          href="#" 
          className="inline-block mt-12 px-12 py-4 border-2 border-white text-xl font-semibold 
                     hover:bg-white hover:text-[#1B365D] transition-colors duration-300"
        >
          OUR STORY
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;