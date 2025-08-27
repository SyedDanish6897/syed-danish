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
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-primary p-1 shadow-glow hover-lift">
            <img
              src="https://res.cloudinary.com/dwcyjebla/image/upload/v1756287286/Home_Danish-removebg-preview_1_ltdbfm.png"
              alt="Syed Danish"
              className="w-full h-full rounded-full object-cover"
            />
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
            <a
              href="https://drive.google.com/file/d/1JRhZmmOOCWpqR9x3hgB1HQ1nUf8BUUlz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-gradient-primary hover:shadow-glow transition-bounce hover:scale-105 rounded-lg cursor-pointer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
            
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
  <a
    href="https://github.com/SyedDanish6897?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-10 h-10 hover-lift hover:text-primary transition-bounce rounded-md cursor-pointer"
    aria-label="Visit my GitHub profile"
  >
    <Github className="h-5 w-5" />
  </a>

  <a
    href="https://www.linkedin.com/in/syed-danish-9a9298233/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-10 h-10 hover-lift hover:text-primary transition-bounce rounded-md cursor-pointer"
    aria-label="Visit my LinkedIn profile"
  >
    <Linkedin className="h-5 w-5" />
  </a>

  <a
    href="mailto:syeddanish6897@gmail.com"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-10 h-10 hover-lift hover:text-primary transition-bounce rounded-md cursor-pointer"
    aria-label="Send me an email"
  >
    <Mail className="h-5 w-5" />
  </a>
</div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full"
            aria-label="Scroll down to about section"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
