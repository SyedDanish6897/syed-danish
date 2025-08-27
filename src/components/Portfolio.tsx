import { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { useTheme } from '@/hooks/useTheme';

const Portfolio = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Use requestAnimationFrame to defer DOM queries and avoid forced reflows
    requestAnimationFrame(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        // Batch DOM updates to prevent layout thrashing
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        });
      }, observerOptions);

      // Defer element queries to next frame to avoid forced reflow
      const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      animatedElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-smooth">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Syed Danish. Built with{' '}
            <span className="text-primary">React</span> and{' '}
            <span className="text-primary">TypeScript</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;