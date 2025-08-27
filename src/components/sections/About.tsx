import { Code, Database, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Experienced in Python, Flask, and modern web technologies to build scalable applications.'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Skilled in data analysis, visualization, and machine learning to extract meaningful insights.'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Building intelligent applications using artificial intelligence and automation.'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Creating responsive, user-friendly web applications with modern frameworks.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer and data enthusiast with a keen interest in creating 
              innovative solutions that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 slide-in-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Building the Future with Code & Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated Python developer and data scientist with a passion for creating 
                  intelligent solutions. My journey in technology spans web development, data analytics, 
                  and artificial intelligence, allowing me to approach problems from multiple angles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With experience in Flask web applications, machine learning models, and data 
                  visualization, I love transforming complex data into actionable insights and 
                  building applications that solve real-world problems.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-card rounded-lg shadow-elegant">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg shadow-elegant">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 slide-in-right">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="hover-lift bg-gradient-card border-0 shadow-elegant"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
