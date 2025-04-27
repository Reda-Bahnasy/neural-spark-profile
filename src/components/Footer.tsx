
import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">AI Portfolio</span>
          </div>
          
          <div className="text-center max-w-md mx-auto mb-6">
            <p className="text-gray-400">
              Passionate AI Engineer and Data Analyst specializing in machine learning, 
              computer vision, and data-driven solutions.
            </p>
          </div>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Email
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {currentYear} AI Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
