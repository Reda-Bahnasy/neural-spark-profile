
import { useState, useEffect } from "react";
import { Code } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#71C9CE] to-[#A6E3E9] h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">RB</span>
            </div>
            <span className="text-xl font-semibold">Reda Bahnasy</span>
          </a>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            <li><a onClick={() => scrollToSection('home')} className="nav-link cursor-pointer">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">Intro</a></li>
            <li><a onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Services</a></li>
            <li><a onClick={() => scrollToSection('projects')} className="nav-link cursor-pointer">Projects</a></li>
            <li><a onClick={() => scrollToSection('experience')} className="nav-link cursor-pointer">Portfolio</a></li>
            <li><a onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Testimonials</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a></li>
          </ul>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col py-4">
              <li><a onClick={() => scrollToSection('home')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Home</a></li>
              <li><a onClick={() => scrollToSection('about')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Intro</a></li>
              <li><a onClick={() => scrollToSection('skills')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Services</a></li>
              <li><a onClick={() => scrollToSection('projects')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Projects</a></li>
              <li><a onClick={() => scrollToSection('experience')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Portfolio</a></li>
              <li><a onClick={() => scrollToSection('skills')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Testimonials</a></li>
              <li><a onClick={() => scrollToSection('contact')} className="block px-4 py-2 hover:text-[#71C9CE] cursor-pointer">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
