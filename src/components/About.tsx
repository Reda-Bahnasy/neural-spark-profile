
import { Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side: Personal Image or Illustration */}
          <div className="lg:w-2/5 w-full flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center">
                  <Brain size={80} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: About Me Content */}
          <div className="lg:w-3/5 w-full">
            <h2 className="section-title text-left pb-2 mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I am an AI Engineer and Data Analyst with a Master's degree in Artificial Intelligence. 
                My passion for technology and problem-solving drives me to continuously expand my knowledge 
                and skills in this rapidly evolving field.
              </p>
              <p>
                I specialize in developing machine learning models, computer vision systems, 
                and natural language processing solutions that address real-world challenges. My approach 
                combines technical expertise with a deep understanding of how AI can positively impact 
                various industries.
              </p>
              <p>
                My mission is to harness the power of artificial intelligence to create practical, 
                ethical, and innovative solutions that make a meaningful difference. I believe in 
                continuous learning and staying at the forefront of AI advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
