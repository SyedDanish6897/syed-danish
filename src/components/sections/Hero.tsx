import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Python Developer',
    'Data Scientist',
    'Data Analytics Enthusiast',
    'Web Developer',
    'AI Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 fade-in visible">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-primary p-1 shadow-glow hover-lift">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
              SD
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
                Syed Danish
              </span>
            </h1>
            
            {/* Typing Animation */}
            <div className="text-xl md:text-2xl text-muted-foreground h-8">
              <span>I'm a </span>
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code, data insights, 
            and AI-powered applications. I transform complex problems into elegant, 
            user-friendly solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-bounce hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="hover-lift border-primary/20"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift hover:text-primary transition-bounce"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift hover:text-primary transition-bounce"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift hover:text-primary transition-bounce"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
