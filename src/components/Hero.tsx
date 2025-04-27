
import { ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="container-custom text-center">
        <div className="mx-auto max-w-3xl">
          {/* Logo placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#71C9CE] to-[#A6E3E9] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">RB</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in mb-4">
            Welcome to Reda Bahnasy's Homepage
          </h1>
          
          <p className="text-lg md:text-xl mt-6 text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            I am a Data Analyst and AI Engineer passionate about solving real-world 
            problems with machine learning, computer vision, and data analysis.
          </p>
          
          <div className="mt-10 space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary">
              VISIT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline">
              CONTACT
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-[#71C9CE] transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
