import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppChat from './WhatsAppChat';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-background" aria-label="Hero">
      {/* Header glow (Light) */}
<div
  className="pointer-events-none absolute inset-x-0 top-0 h-[90%] dark:hidden"
  style={{
    background:
      "linear-gradient(180deg, hsl(var(--primary) / 0.34) 0%, hsl(var(--primary) / 0.16) 22%, hsl(var(--primary) / 0.06) 48%, transparent 78%)",
    filter: "blur(28px) saturate(1.15)",
  }}
  aria-hidden="true"
/>

{/* Header glow (Dark) */}
<div
  className="pointer-events-none absolute inset-x-0 top-0 h-[90%] hidden dark:block"
  style={{
    background:
      "linear-gradient(180deg, hsl(var(--primary) / 0.22) 0%, hsl(var(--primary) / 0.10) 22%, hsl(var(--primary) / 0.04) 48%, transparent 78%)",
    filter: "blur(30px) saturate(1.1)",
  }}
  aria-hidden="true"
/>

{/* Radial depth (Light) */}
<div
  className="pointer-events-none absolute inset-0 dark:hidden"
  style={{
    background:
      "radial-gradient(ellipse 68% 52% at 78% 12%, hsl(var(--primary) / 0.22) 0%, hsl(var(--primary) / 0.10) 34%, transparent 66%)",
    filter: "blur(22px) saturate(1.1)",
  }}
  aria-hidden="true"
/>

{/* Radial depth (Dark) */}
<div
  className="pointer-events-none absolute inset-0 hidden dark:block"
  style={{
    background:
      "radial-gradient(ellipse 68% 52% at 78% 12%, hsl(var(--primary) / 0.16) 0%, hsl(var(--primary) / 0.07) 34%, transparent 66%)",
    filter: "blur(24px) saturate(1.05)",
  }}
  aria-hidden="true"
/>      
      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-8 backdrop-blur-sm">
                <MessageSquare className="h-4 w-4" />
                <span>Asistentes IA para WhatsApp Business</span>
              </div>
            </div>

            <h1 className="heading-hero text-balance fade-in-up fade-in-up-delay-1">
              <span className="text-foreground">Conectamos datos.</span>
              <br />
              <span className="text-gradient-gold">Automatizamos decisiones.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-balance fade-in-up fade-in-up-delay-2 text-muted-foreground">
              Transforma la atención al cliente con asistentes inteligentes que responden, 
              cualifican y convierten 24/7 por WhatsApp.
            </p>
            <p className="mt-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-balance fade-in-up fade-in-up-delay-2 text-muted-foreground">
              Automatización inteligente basada en datos para operar, escalar y decidir mejor.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 fade-in-up fade-in-up-delay-3">
              <Link to="/es/#contacto">
                <Button variant="default" size="xl" className="group">
                  Agendar llamada
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/es/products/">
                <Button variant="outline" size="xl">
                  Ver soluciones
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: WhatsApp Chat mockup */}
          <div className="fade-in-up fade-in-up-delay-2 lg:fade-in-up-delay-3">
            <WhatsAppChat />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;