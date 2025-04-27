
import { Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-[#71C9CE] to-[#A6E3E9] h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">RB</span>
            </div>
            <span className="text-xl font-semibold">Reda Bahnasy</span>
          </div>
          
          <div className="text-center max-w-md mx-auto mb-6">
            <p className="text-gray-400">
              Data Analyst and AI Engineer specializing in machine learning, 
              computer vision, and data-driven solutions.
            </p>
          </div>
          
          <div className="flex gap-6 mb-8">
            <a href="https://www.linkedin.com/in/reda-bahnasy-0ba601193/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#71C9CE] transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#71C9CE] transition-colors">
              <Github />
            </a>
            <a href="mailto:Reda_Bahnasy@icloud.com" className="text-gray-400 hover:text-[#71C9CE] transition-colors">
              <Mail />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {currentYear} Reda Bahnasy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
