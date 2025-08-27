import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'News Website Project',
      description: 'A Flask-based personal news website that fetches and displays news articles with a clean, responsive interface. Features real-time news updates and category filtering.',
      technologies: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'API Integration'],
      category: 'Web Development',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/SyedDanish6897/News-website',
      liveUrl: '#',
      highlights: ['Real-time news fetching', 'Responsive design', 'Category filtering']
    },
    {
      title: 'Smart URL Shortener',
      description: 'An intelligent Flask-based URL shortener with analytics dashboard, click tracking, and comprehensive statistics. Features user authentication and custom short URLs.',
      technologies: ['Python', 'Flask', 'SQL', 'JavaScript', 'Analytics'],
      category: 'Web Development',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/SyedDanish6897/smart-url-shortener',
      liveUrl: '#',
      highlights: ['Click analytics', 'Custom URLs', 'User dashboard']
    },
    {
      title: 'Weather App Project',
      description: 'A Python-based weather application that fetches real-time weather data using APIs. Features location-based forecasts, weather alerts, and intuitive user interface.',
      technologies: ['Python', 'API Integration', 'Data Visualization', 'UI/UX'],
      category: 'API Integration',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/SyedDanish6897/Live-Weather-app-',
      liveUrl: '#',
      highlights: ['Real-time data', 'Location-based', 'Weather forecasts']
    },
    {
      title: 'Customer Satisfaction Prediction',
      description: 'Machine learning project developed during internship to predict customer satisfaction using advanced ML algorithms and SQL database integration.',
      technologies: ['Python', 'Machine Learning', 'SQL', 'Data Analysis', 'Scikit-learn'],
      category: 'Data Science',
      image: '/placeholder.svg',
      githubUrl: 'https://github.com/SyedDanish6897/Customer-Satisfaction-Prediction',
      liveUrl: '#',
      highlights: ['ML algorithms', 'Data analysis', 'Predictive modeling']
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'API Integration'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work including web applications, data science projects, and AI solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 slide-in-left">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-smooth ${
                  filter === category 
                    ? 'bg-gradient-primary shadow-glow' 
                    : 'hover:bg-primary/10'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="hover-lift bg-gradient-card border-0 shadow-elegant overflow-hidden group slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 hover:bg-primary/10 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3 flex-1 hover:bg-primary/10 cursor-pointer rounded-md"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12 fade-in">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift border-primary/30 hover:bg-primary/10"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
