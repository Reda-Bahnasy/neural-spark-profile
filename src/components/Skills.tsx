
import { useState, useEffect, useRef } from "react";
import { Code, Database, ChartBar, Layers, Microscope } from "lucide-react";

interface Skill {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
  icon: React.ReactNode;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    {
      category: "Programming",
      items: [
        { name: "Python", proficiency: 90 },
        { name: "SQL", proficiency: 85 },
        { name: "R", proficiency: 75 },
      ],
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Supervised Learning", proficiency: 90 },
        { name: "Unsupervised Learning", proficiency: 80 },
        { name: "Deep Learning", proficiency: 85 },
      ],
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      category: "Data Engineering",
      items: [
        { name: "Data Processing", proficiency: 85 },
        { name: "Data Visualization", proficiency: 80 },
        { name: "ETL Pipelines", proficiency: 75 },
      ],
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      category: "Computer Vision",
      items: [
        { name: "Image Classification", proficiency: 85 },
        { name: "Object Detection", proficiency: 80 },
        { name: "Image Segmentation", proficiency: 75 },
      ],
      icon: <Microscope className="h-8 w-8 text-primary" />,
    },
    {
      category: "Natural Language Processing",
      items: [
        { name: "Text Classification", proficiency: 85 },
        { name: "Named Entity Recognition", proficiency: 80 },
        { name: "Sentiment Analysis", proficiency: 85 },
      ],
      icon: <ChartBar className="h-8 w-8 text-primary" />,
    },
    {
      category: "Frameworks",
      items: [
        { name: "TensorFlow", proficiency: 85 },
        { name: "PyTorch", proficiency: 80 },
        { name: "Scikit-Learn", proficiency: 90 },
      ],
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`skill-card ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="w-full space-y-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="w-full">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.proficiency}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
