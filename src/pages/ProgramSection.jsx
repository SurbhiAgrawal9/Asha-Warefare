import React from 'react';
import { Plus } from 'lucide-react';

const ProgramSection = () => {
  const programs = [
    {
      title: "ARTS",
      description: "Asha Warefare provides opportunities for everyone in our community to explore their interests in performing and visual arts, both as active participants and new audience members.",
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

export default ProgramSection;