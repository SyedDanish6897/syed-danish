import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'Flask', level: 85, category: 'Frameworks' },
    { name: 'JavaScript', level: 80, category: 'Programming' },
    { name: 'HTML/CSS', level: 85, category: 'Web Development' },
    { name: 'SQL', level: 75, category: 'Database' },
    { name: 'Machine Learning', level: 70, category: 'AI/ML' },
    { name: 'Data Visualization', level: 80, category: 'Analytics' },
    { name: 'API Integration', level: 85, category: 'Development' }
  ];

  const categories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Flask', 'React', 'Pandas', 'NumPy', 'Scikit-learn']
    },
    {
      title: 'Data & Analytics',
      skills: ['Data Analysis', 'Data Visualization', 'Machine Learning', 'Statistical Analysis']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'API Development', 'Database Design', 'Web Scraping', 'Automation']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          <div className="space-y-12">
            {/* Technical Skills with Progress Bars */}
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories */}
            <div className="slide-in-right">
              <h3 className="text-2xl font-semibold mb-8 text-center">Skills by Category</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <Card 
                    key={category.title} 
                    className="hover-lift bg-gradient-card border-0 shadow-elegant"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="mr-1 mb-1 bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="text-center fade-in">
              <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {[
                  'Problem Solving', 'Critical Thinking', 'Project Management', 
                  'Team Collaboration', 'Continuous Learning', 'Innovation',
                  'Communication', 'Adaptability'
                ].map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
