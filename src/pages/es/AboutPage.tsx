import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
const values = [{
  icon: Target,
  title: 'Precisión',
  description: 'Soluciones que funcionan. Sin excusas, sin sorpresas.'
}, {
  icon: Lightbulb,
  title: 'Innovación práctica',
  description: 'Tecnología de vanguardia aplicada a problemas reales.'
}, {
  icon: Users,
  title: 'Partnership',
  description: 'Tu éxito es nuestro éxito. Crecemos juntos.'
}];
const AboutPage = () => {
  return <>
      <Helmet>
        <title>Sobre Nosotros | Lytrium</title>
        <meta name="description" content="Conoce a Lytrium: diseñamos automatizaciones con IA y analítica de datos para reducir fricción operativa, mejorar procesos y escalar decisiones." />
        <link rel="canonical" href="https://lytrium.tech/es/about/" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lytrium.tech/es/about/" />
        <meta property="og:title" content="Sobre Nosotros | Lytrium" />
        <meta property="og:description" content="Automatización con IA y analítica de datos para reducir fricción operativa y escalar decisiones." />
        <meta property="og:image" content="https://lytrium.tech/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros | Lytrium" />
        <meta name="twitter:description" content="Automatización con IA y analítica de datos para reducir fricción operativa y escalar decisiones." />
        <meta name="twitter:image" content="https://lytrium.tech/og-image.jpg" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-40 pb-20 bg-background">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Sobre nosotros
              </p>
              <h1 className="heading-hero text-balance">
                Tecnología con
                <span className="text-gradient-gold"> propósito</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Diseñamos sistemas de automatización e inteligencia aplicada que eliminan fricción operativa y convierten datos en decisiones claras.
                <br />
                <br />
                Menos fricción. Más control.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding section-separator bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-section mb-8">
                  Por qué existimos
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>Vimos cómo empresas con gran potencial perdían tiempo, dinero y oportunidades por procesos manuales, respuestas lentas y sistemas desconectados.</p>
                  <p>Lytrium nace para cambiar eso. Diseñamos sistemas inteligentes que automatizan conversaciones y flujos críticos, conectan datos dispersos y aplican analítica y ciencia de datos para convertir señales de negocio en decisiones claras.</p>
                  <p>
                    Hoy ayudamos a empresas de todos los tamaños a automatizar su operación, conectar sistemas y convertir datos en decisiones accionables.
                  </p>
                </div>
              </div>
              <div className="glass-card p-10 lg:p-12">
                <blockquote className="text-2xl font-medium leading-relaxed mb-6">
                  "La mejor tecnología es la que desaparece. Que simplemente funciona."
                </blockquote>
                <cite className="text-muted-foreground not-italic">
                  — Equipo Lytrium
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding section-separator bg-background">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-section">Nuestros valores</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map(value => <article key={value.title} className="glass-card p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </article>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding section-separator bg-background">
          <div className="container-narrow text-center">
            <h2 className="heading-section mb-6">
              ¿Conectamos?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">Nos encanta trabajar con empresas con visión. Cuéntanos tu reto.</p>
            <Link to="/es/#contacto">
              <Button variant="hero" size="xl">
                Agendar llamada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>;
};
export default AboutPage;
