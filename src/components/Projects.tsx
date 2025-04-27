
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    kaggle?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sentiment Analysis Engine",
      description: "A natural language processing system that analyzes customer feedback to identify sentiment patterns and key themes using BERT transformers.",
      image: "/placeholder.svg",
      techStack: ["Python", "PyTorch", "NLTK", "Transformers", "Flask"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Genre Classification (IMDb Dataset)",
      description: "Movie genre classification system using the IMDb dataset with custom feature extraction and ensemble machine learning models.",
      image: "/placeholder.svg",
      techStack: ["Python", "Scikit-learn", "Pandas", "NLTK", "Matplotlib"],
      links: {
        github: "#",
        kaggle: "#"
      }
    },
    {
      title: "Customer Churn Predictor",
      description: "Machine learning model to predict customer churn using logistic regression and random forest classifiers with detailed feature analysis.",
      image: "/placeholder.svg",
      techStack: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Seaborn"],
      links: {
        github: "#",
        kaggle: "#"
      }
    },
    {
      title: "Image Recognition System",
      description: "Computer vision application for object recognition and classification using convolutional neural networks with transfer learning.",
      image: "/placeholder.svg",
      techStack: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-blue-100 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {project.links.kaggle && (
                    <a 
                      href={project.links.kaggle} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Kaggle</span>
                    </a>
                  )}
                  
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
