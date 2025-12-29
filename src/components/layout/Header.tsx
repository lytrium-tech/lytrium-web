import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const location = useLocation();

  // Scroll-spy for detecting active section
  const updateActiveSection = useCallback(() => {
    const sections = ['faq', 'contacto'];
    const headerHeight = document.getElementById('site-header')?.offsetHeight || 80;
    const scrollY = window.scrollY + headerHeight + 100;

    let foundSection: string | null = null;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
          foundSection = sectionId;
          break;
        }
      }
    }
    
    setActiveSection(foundSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Only run scroll-spy on home page
      if (location.pathname === '/es/' || location.pathname === '/es') {
        updateActiveSection();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, updateActiveSection]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navLinks = [
    { href: '/es/', label: 'Inicio', sectionId: null },
    { href: '/es/products/', label: 'Productos', sectionId: null },
    { href: '/es/about/', label: 'Nosotros', sectionId: null },
    { href: '/es/#faq', label: 'FAQ', sectionId: 'faq' },
  ];

  const isActive = (link: { href: string; sectionId: string | null }) => {
    // Check if we're on home and scrolled to this section
    if (link.sectionId && (location.pathname === '/es/' || location.pathname === '/es')) {
      return activeSection === link.sectionId;
    }
    // Otherwise check pathname match (exact match, not section links)
    if (link.sectionId) return false;
    return location.pathname === link.href;
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide" aria-label="Navegación principal">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/es/"
            className="flex items-center gap-3 focus-ring rounded-lg"
            aria-label="Lytrium - Ir al inicio"
          >
            <img 
              src="/Wordmark.svg" 
              alt="Lytrium Wordmark" 
              className="h-4 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium transition-colors focus-ring rounded-lg px-2 py-1 ${
                  isActive(link)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive(link) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors focus-ring"
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <a 
              href="https://wa.me/573000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:block"
            >
              <Button variant="default" className="btn-primary text-sm px-6 py-2.5">
                Escríbenos por WhatsApp
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden rounded-lg hover:bg-muted transition-colors focus-ring"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors focus-ring rounded-lg px-2 ${
                  isActive(link)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://wa.me/573000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="default" className="btn-primary w-full mt-2">
                Escríbenos por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
