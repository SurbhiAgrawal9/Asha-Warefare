import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import WelcomeSection from './WelcomeSection';
import ReviewSection from './ReviewSection';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&h=600&q=80",
      title: "INTERESTED IN",
      highlight: "TEEN &",
      subtitle: "YOUNG ADULT",
      emphasis: "SERVICES",
      end: "PROGRAM?",
      buttonText: "FILL OUT AN INTEREST FORM"
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&h=600&q=80",
      title: "EMPOWERING",
      highlight: "YOUTH",
      subtitle: "THROUGH",
      emphasis: "EDUCATION",
      end: "& SUPPORT",
      buttonText: "LEARN MORE"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1920&h=600&q=80",
      title: "BUILDING",
      highlight: "STRONGER",
      subtitle: "COMMUNITIES",
      emphasis: "TOGETHER",
      end: "SINCE 1895",
      buttonText: "JOIN OUR COMMUNITY"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="container mx-auto h-full flex items-center px-4">
                <div className="text-white max-w-3xl">
                  <h2 className="text-5xl font-bold mb-4">
                    {slide.title}{' '}
                    <span className="text-orange-500">{slide.highlight}</span>
                    <br />
                    {slide.subtitle}{' '}
                    <span className="text-orange-500">{slide.emphasis}</span>{' '}
                    {slide.end}
                  </h2>
                  <button className="mt-6 px-8 py-3 bg-white text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors duration-300 font-semibold rounded">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full text-white transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full text-white transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProgramSection = () => {
  const programs = [
    {
      title: "ARTS",
      description: "Hudson Guild provides opportunities for everyone in our community to explore their interests in performing and visual arts, both as active participants and new audience members.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    },
    {
      title: "Adult Services",
      description: "Comprehensive support and enrichment programs designed to enhance the lives of adults in our community through education, wellness, and social engagement.",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    },
    {
      title: "Community Building",
      description: "Creating stronger neighborhoods through collaborative initiatives, events, and programs that bring people together.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    },
    {
      title: "Youth Programs",
      description: "Empowering young minds through educational support, creative activities, and leadership development opportunities.",
      image: "https://images.unsplash.com/photo-1587729927069-dda05c4d3876?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    },
    {
      title: "Senior Services",
      description: "Dedicated programs and activities designed to support the well-being and social connection of our senior community members.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    },
    {
      title: "Education Initiatives",
      description: "Fostering lifelong learning through diverse educational programs, workshops, and resources for all ages.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&h=600&q=80",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-[#1B365D] mb-4">Our Programs</h2>
        <div className="h-1 w-32 bg-[#3B82F6] mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-[400px]">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              
              <div 
                className="absolute inset-x-0 h-full bg-[#1B365D]/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ top: 0 }}
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <h3 className="text-2xl font-bold relative z-10">{program.title}</h3>
                
                <div className="h-1 w-16 bg-[#3B82F6] mt-2 mb-4" />
                
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <p className="mb-6 text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <a 
                    href={program.link}
                    className="inline-flex items-center text-white hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    Learn More
                    <Plus className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-4">
            Join Our Mailing List
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Stay connected with our community and receive updates about our programs and events
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-right text-sm text-gray-500 mb-6">
              <span className="text-red-500">*</span> Required fields
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-left text-gray-700 font-medium mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-left text-gray-700 font-medium mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Share your thoughts or questions with us..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#1B365D] text-white font-semibold rounded-md hover:bg-[#142847] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <ImageSlider />
        <WelcomeSection />
        <ProgramSection />
        <ReviewSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;