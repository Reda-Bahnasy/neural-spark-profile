
interface Experience {
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: string[];
  type: "work" | "education" | "certification";
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      title: "AI Research Intern",
      company: "Tech Innovations Lab",
      date: "June 2023 - Present",
      description: [
        "Developed computer vision algorithms for object detection in autonomous systems.",
        "Collaborated with cross-functional teams to integrate ML models into production environments.",
        "Conducted regular experiments to improve model accuracy by 15%."
      ],
      type: "work"
    },
    {
      title: "Data Science Consultant",
      company: "DataSense Solutions",
      date: "Jan 2022 - May 2023",
      description: [
        "Analyzed large datasets to extract actionable insights for client decision-making.",
        "Built predictive models for customer behavior using machine learning techniques.",
        "Created interactive data visualizations to communicate findings to stakeholders."
      ],
      type: "work"
    },
    {
      title: "Master's in Artificial Intelligence",
      institution: "Tech University",
      date: "2020 - 2022",
      description: [
        "Specialized in machine learning and computer vision.",
        "Thesis: 'Advancing Object Recognition in Dynamic Environments'.",
        "Graduated with honors."
      ],
      type: "education"
    },
    {
      title: "TensorFlow Developer Certificate",
      institution: "Google",
      date: "April 2022",
      description: [
        "Comprehensive certification covering TensorFlow model development and deployment.",
        "Demonstrated expertise in building neural network architectures for various applications."
      ],
      type: "certification"
    },
    {
      title: "Deep Learning Specialization",
      institution: "Coursera",
      date: "Sept 2021",
      description: [
        "Series of courses covering neural networks, optimization algorithms, and deep learning applications.",
        "Completed practical projects in image recognition, natural language processing, and more."
      ],
      type: "certification"
    }
  ];

  const workExperiences = experiences.filter(exp => exp.type === "work");
  const educationCertifications = experiences.filter(exp => ["education", "certification"].includes(exp.type));

  return (
    <section id="experience">
      <div className="container-custom">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Professional Experience</h3>
            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full"></div>
                  
                  {/* Timeline line */}
                  {index < workExperiences.length - 1 && (
                    <div className="absolute left-[7px] top-6 w-0.5 h-[calc(100%+2rem)] bg-gray-200"></div>
                  )}
                  
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Education & Certifications</h3>
            <div className="space-y-8">
              {educationCertifications.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full"></div>
                  
                  {/* Timeline line */}
                  {index < educationCertifications.length - 1 && (
                    <div className="absolute left-[7px] top-6 w-0.5 h-[calc(100%+2rem)] bg-gray-200"></div>
                  )}
                  
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.institution}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
