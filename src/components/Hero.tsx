
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
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
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
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
