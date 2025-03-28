import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Community Member",
      text: "Asha Warefare has made an incredible impact in our community. Their dedication to helping families in need is truly inspiring. Through their support, I was able to secure better education for my children.",
      rating: 5
    },
    {
      initials: "MC",
      name: "Michael Chen",
      role: "Volunteer",
      text: "Working with Asha Warefare has been a life-changing experience. The organization's commitment to community development and their systematic approach to solving social issues is commendable.",
      rating: 5
    },
    {
      initials: "PP",
      name: "Priya Patel",
      role: "Program Beneficiary",
      text: "The support I received from Asha Warefare during difficult times was invaluable. Their team went above and beyond to ensure my family had access to essential resources and opportunities.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1B365D] mb-16">
          What People Say About Us
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-[#1B365D] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-[#1B365D] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={40} />
          </button>

          {/* Reviews Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1B365D]">{review.name}</h3>
                    <p className="text-gray-600">{review.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {review.text}
                </p>

                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#3B82F6] w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;