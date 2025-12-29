import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const currentPath = location.pathname;
  const footerLinks = {
    producto: [{
      href: '/es/products/',
      label: 'Soluciones'
    }, {
      href: '/es/#como-funciona',
      label: 'Cómo funciona'
    }, {
      href: '/es/#beneficios',
      label: 'Beneficios'
    }, {
      href: '/es/#faq',
      label: 'Preguntas frecuentes'
    }],
    empresa: [{
      href: '/es/about/',
      label: 'Nosotros'
    }, {
      href: '/es/#contacto',
      label: 'Contacto'
    }],
    legal: [{
      href: '/es/privacy/',
      label: 'Privacidad'
    }, {
      href: '/es/terms/',
      label: 'Términos'
    }, {
      href: '/es/cookies/',
      label: 'Cookies'
    }]
  };

  // Check if a link matches the current page
  const isCurrentPage = (href: string) => {
    // For hash links, they're always on the home page
    if (href.includes('#')) {
      return false;
    }
    // Remove trailing slash for comparison
    const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href;
    const normalizedPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    return normalizedHref === normalizedPath;
  };

  // Filter out the current page link
  const filterLinks = (links: {
    href: string;
    label: string;
  }[]) => {
    return links.filter(link => !isCurrentPage(link.href));
  };
  return <footer className="border-t border-border/50 bg-background" role="contentinfo">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
             <Link to="/es/" className="inline-flex items-center focus-ring rounded-lg" aria-label="Lytrium - Ir al inicio">
              <img 
                src="/Logo.svg"
                alt="Lytrium Logo" 
                className="h-[110px] w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 -mt-4">
              Conectamos datos. Automatizamos decisiones.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/lytrium" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors focus-ring" aria-label="LinkedIn de Lytrium">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:lytriums@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors focus-ring" aria-label="Enviar email a Lytrium">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {filterLinks(footerLinks.producto).map(link => <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {filterLinks(footerLinks.empresa).map(link => <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {filterLinks(footerLinks.legal).map(link => <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lytrium. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">Hecho con precisión en Colombia</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;