
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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2">
            <Code className="text-primary h-7 w-7" />
            <span className="text-xl font-semibold">AI Portfolio</span>
          </a>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
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
              <li><a href="#home" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>About</a></li>
              <li><a href="#skills" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#experience" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#contact" className="block px-4 py-2 hover:text-primary" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
