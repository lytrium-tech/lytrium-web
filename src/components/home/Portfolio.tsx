import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, Workflow, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <section
      id="soluciones"
      className="section-padding section-separator bg-background"
      aria-labelledby="portfolio-title"
    >
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Más allá de WhatsApp
          </p>
          <h2 id="portfolio-title" className="heading-section text-balance">
            Otras soluciones
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Proximamente
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/es/products/">
            <Button variant="outline" size="lg">
              Ver todas las soluciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
