import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section
      id="contacto"
      className="section-padding bg-background relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="glass-card p-12 lg:p-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8">
            <Calendar className="h-4 w-4" />
            <span>Agenda tu demo gratuita</span>
          </div>

          <h2 id="cta-title" className="heading-section text-balance">
            ¿Listo para automatizar
            <br />
            <span className="text-gradient-gold">tu atención al cliente?</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Reserva 30 minutos con nuestro equipo. Te mostraremos cómo funcionaría 
            un asistente IA para tu negocio específico.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/lytriums/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="group">
                Agendar llamada
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="mailto:lytriums@gmail.com">
              <Button variant="hero-outline" size="xl">
                lytriums@gmail.com
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Sin compromiso. Respuesta en menos de 24h.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
