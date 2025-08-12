
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, Sun, Moon, Monitor } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeSection, setShowThemeSection] = useState(false);
  const { setTheme, theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      // Show theme section after a delay
      const timer = setTimeout(() => {
        setShowThemeSection(true);
      }, 500); // 500ms delay

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.body.style.overflow = 'unset';
        clearTimeout(timer);
        setShowThemeSection(false);
      };
    } else {
      document.body.style.overflow = 'unset';
      setShowThemeSection(false);
    }
  }, [isMenuOpen]);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hoangtrongtra-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@trahoang.dev', label: 'Email' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simple theme toggle for mobile menu
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const getCurrentThemeIcon = () => {
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    if (theme === 'light') return <Sun className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  const getCurrentThemeText = () => {
    if (theme === 'dark') return 'Dark';
    if (theme === 'light') return 'Light';
    return 'System';
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="#" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                trahoang.dev
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Social Links & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-6">
              <ThemeToggle />
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-2 rounded-lg hover:bg-muted/50"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 mobile-menu"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "rotate-45" : "-translate-y-1"
                )} />
                <span className={cn(
                  "absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute left-0 top-1/2 w-6 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "-rotate-45" : "translate-y-1"
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Moved outside header */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card border-l border-border shadow-2xl">
            <div className="flex flex-col h-full bg-card">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                <span className="text-xl font-semibold text-foreground">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-8">
                  {/* Mobile Navigation Links */}
                  <nav className="space-y-3">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Navigation</span>
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-lg font-medium text-foreground hover:text-primary transition-all duration-300 py-4 px-4 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>

                  {/* Theme Toggle with delay */}
                  <div className={cn(
                    "space-y-3 transition-all duration-500",
                    showThemeSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Theme</span>
                    
                    {/* Current Theme Display */}
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <span className="text-foreground font-medium">Current:</span>
                        <div className="flex items-center space-x-2">
                          {getCurrentThemeIcon()}
                          <span className="text-sm text-foreground">{getCurrentThemeText()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Theme Options */}
                    <div className="space-y-2">
                      <button
                        onClick={() => handleThemeChange('light')}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200",
                          theme === 'light' 
                            ? "bg-primary/10 border-primary/30 text-primary" 
                            : "bg-muted/20 border-border hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <Sun className="h-5 w-5" />
                          <span className="font-medium">Light</span>
                        </div>
                        {theme === 'light' && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </button>

                      <button
                        onClick={() => handleThemeChange('dark')}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200",
                          theme === 'dark' 
                            ? "bg-primary/10 border-primary/30 text-primary" 
                            : "bg-muted/20 border-border hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <Moon className="h-5 w-5" />
                          <span className="font-medium">Dark</span>
                        </div>
                        {theme === 'dark' && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </button>

                      <button
                        onClick={() => handleThemeChange('system')}
                        className={cn(
                          "w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200",
                          theme === 'system' 
                            ? "bg-primary/10 border-primary/30 text-primary" 
                            : "bg-muted/20 border-border hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <Monitor className="h-5 w-5" />
                          <span className="font-medium">System</span>
                        </div>
                        {theme === 'system' && <div className="w-2 h-2 bg-primary rounded-full" />}
                      </button>
                    </div>
                    
                    {/* Theme description */}
                    <div className="p-3 bg-muted/20 rounded-lg border border-border/50">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Choose your preferred theme. System follows your device settings.
                      </p>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="space-y-3">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Connect</span>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 border border-border"
                        >
                          <div className="p-2 rounded-lg bg-primary/10">
                            <social.icon size={18} className="text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed bottom section */}
              <div className="p-6 border-t border-border bg-card">
                {/* Quick Actions */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('#contact');
                    }}
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-muted/50 font-medium transition-all duration-300"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick('#projects');
                    }}
                  >
                    View Projects
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Available for freelance opportunities and exciting projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
