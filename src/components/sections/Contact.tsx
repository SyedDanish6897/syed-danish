import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'syeddanish6897@gmail.com',
      href: 'mailto:syeddanish6897@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8668740849',
      href: 'tel:+918668740849'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Aurangabad, India 🇮🇳',
      href: 'https://maps.app.goo.gl/7o9J1gu9Xyqxwf4R6'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      url: 'https://github.com/SyedDanish6897?tab=repositories',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/syed-danish-9a9298233/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      url: 'mailto:syeddanish6897@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start a conversation? I'd love to hear from you. Send me a message 
              and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'm always open to new opportunities and conversations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 bg-gradient-card rounded-lg hover-lift transition-smooth group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.title}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                      className={`w-10 h-10 bg-gradient-card rounded-full flex items-center justify-center hover-lift transition-smooth ${social.color}`}
                      aria-label={social.title === 'Email' ? 'Send me an email' : `Visit my ${social.title} profile`}
                     
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 slide-in-right">
              <Card className="bg-gradient-card border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50 border-border focus:border-primary transition-smooth"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-border focus:border-primary transition-smooth"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-background/50 border-border focus:border-primary transition-smooth"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        required
                        className="bg-background/50 border-border focus:border-primary transition-smooth resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-bounce hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
