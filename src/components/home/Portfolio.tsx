import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, Workflow, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: Database,
    title: 'Integración de Datos',
    description: 'Conectamos tus sistemas y bases de datos para crear una fuente única de verdad.',
    href: '/es/products/',
  },
  {
    icon: Brain,
    title: 'IA Conversacional',
    description: 'Chatbots y asistentes que entienden contexto y responden como humanos.',
    href: '/es/products/',
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description: 'Workflows inteligentes que eliminan tareas repetitivas y errores humanos.',
    href: '/es/products/',
  },
  {
    icon: Shield,
    title: 'Consultoría Tech',
    description: 'Asesoría estratégica para digitalizar y escalar tu operación.',
    href: '/es/products/',
  },
];

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
            Si tu reto es diferente, también podemos ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={solution.title}
              to={solution.href}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="glass-card p-8 lg:p-10 h-full flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {solution.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
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
