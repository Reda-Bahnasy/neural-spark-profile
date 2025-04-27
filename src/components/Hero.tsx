
import { ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            AI Engineer & Data Analyst
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-700 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Passionate about solving real-world problems through artificial intelligence 
            and data-driven insights.
          </p>
          <div className="mt-8 space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
      
      {/* Remove old background decorative elements */}
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-primary transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
