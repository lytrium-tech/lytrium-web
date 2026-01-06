import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Database, Brain, Workflow, Shield, Check, BookOpen, Clock, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

// Producto estrella
const starProduct = {
  icon: MessageSquare,
  title: 'Asistente Ejecutivo 24/7 para WhatsApp',
  subtitle: 'Tu primer punto de contacto inteligente',
  description: 'Un asistente conversacional que atiende, cualifica y agenda por ti. Diseñado para empresas que quieren escalar sin perder el trato personalizado.',
  capabilities: [
    { title: 'Respuestas 24/7', description: 'Atención inmediata sin importar la hora ni el día.' },
    { title: 'Aprendizaje a partir de datos reales', description: 'El sistema analiza patrones conversacionales y métricas operativas para mejorar semana a semana.' },
    { title: 'Agendamiento inteligente', description: 'Coordina citas directamente en tu calendario.' },
    { title: 'Transferencia a humanos', description: 'Escala conversaciones complejas cuando es necesario.' },
  ],
};

// Segunda solución destacada (card grande)
const secondaryHighlight = {
  icon: BookOpen,
  category: 'MEMORIA',
  title: 'Motores de conocimiento RAG',
  subtitle: 'Para empresas con mucha información y poco tiempo para encontrarla.',
  description: 'Construimos sistemas que conectan tus documentos, bases de datos y fuentes internas para que cualquier persona del equipo encuentre respuestas en segundos.',
  features: [
    'Búsqueda semántica en documentos internos.',
    'Respuestas contextuales basadas en tu información.',
    'Integración con bases de datos y repositorios existentes.',
    'Arquitectura de datos + recuperación inteligente de conocimiento.',
  ],
};

// Otras soluciones (cards pequeñas)
const otherSolutions = [
  {
    id: 'integracion',
    icon: Database,
    title: 'Integración de datos',
    description: 'Conectamos tus sistemas (CRM, ERP, eCommerce) para crear una fuente única de verdad y automatizar flujos de información.',
    features: ['APIs REST', 'Webhooks', 'ETL automatizado', 'Data warehouse'],
  },
  {
    id: 'ia-conversacional',
    icon: Brain,
    title: 'IA Conversacional',
    description: 'Chatbots y asistentes que entienden contexto y responden como humanos en cualquier canal.',
    features: ['NLP avanzado', 'Multicanal', 'Aprendizaje continuo', 'Personalización'],
  },
  {
    id: 'automatizacion',
    icon: Workflow,
    title: 'Automatización de procesos',
    description: 'Diseñamos workflows que eliminan tareas manuales, reducen errores y liberan tiempo de tu equipo.',
    features: ['RPA', 'Workflows visuales', 'Integraciones nativas', 'Monitorización', 'Optimización basada en métricas'],
  },
  {
    id: 'consultoria',
    icon: Shield,
    title: 'Consultoría tech',
    description: 'Asesoría estratégica para definir tu roadmap de transformación digital y escalar tu operación.',
    features: ['Auditoría tech', 'Roadmap digital', 'Selección de herramientas', 'Change management'],
  },
];

// Mini-cards de preview para el Hero
const solutionPreviews = [
  { icon: MessageSquare, title: 'WhatsApp IA', href: '#producto-estrella' },
  { icon: BookOpen, title: 'Motor RAG', href: '#rag' },
  { icon: Workflow, title: 'Automatización', href: '#automatizacion' },
  { icon: Shield, title: 'Consultoría', href: '#consultoria' },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Productos y Soluciones | Lytrium</title>
        <meta
          name="description"
          content="Catálogo de soluciones Lytrium: automatización con IA para WhatsApp y canales digitales, integración de datos, flujos operativos y analítica para tomar mejores decisiones."
        />
        <link rel="canonical" href="https://lytrium.tech/es/products/" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lytrium.tech/es/products/" />
        <meta property="og:title" content="Productos y Soluciones | Lytrium" />
        <meta property="og:description" content="Automatización con IA, integración de datos y analítica para empresas. WhatsApp, procesos y sistemas conectados." />
        <meta property="og:image" content="https://lytrium.tech/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Productos y Soluciones | Lytrium" />
        <meta name="twitter:description" content="Automatización con IA, integración de datos y analítica para empresas. WhatsApp, procesos y sistemas conectados." />
        <meta name="twitter:image" content="https://lytrium.tech/og-image.jpg" />
      </Helmet>

      <Layout>
        {/* Hero / Catálogo - altura completa para que producto estrella quede debajo */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center bg-background">
          <div className="container-wide py-24">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                Catálogo
              </p>
              <h1 className="heading-hero text-balance">
                Elige el producto.
                <span className="text-gradient-gold"> Escala el sistema</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Empieza por el producto estrella en WhatsApp o explora soluciones para operación, 
                memoria e inteligencia.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a href="#producto-estrella" onClick={(e) => scrollToSection(e, '#producto-estrella')}>
                  <Button className="rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 px-6 py-3 h-auto">
                    Producto estrella
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#otras-soluciones" onClick={(e) => scrollToSection(e, '#otras-soluciones')}>
                  <Button variant="outline" className="rounded-lg border-border/60 px-6 py-3 h-auto">
                    Otras soluciones
                  </Button>
                </a>
                <a href="#cta-reto" onClick={(e) => scrollToSection(e, '#cta-reto')}>
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    Tengo otra idea
                  </Button>
                </a>
              </div>

              {/* Métricas sutiles */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary/60" />
                  <span>Atención 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary/60" />
                  <span>&lt; 2s tiempo de respuesta</span>
                </div>
              </div>
              </div>
              {/* Bloque vacío derecha */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* Producto Estrella + Capacidades (unificado) */}
        <section id="producto-estrella" className="py-24 bg-background section-separator">
          <div className="container-wide">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Producto estrella
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
              {starProduct.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {starProduct.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/es/#contacto">
                <Button variant="hero" size="lg">
                  Solicitar demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ver demo en WhatsApp
                </Button>
              </a>
            </div>

            {/* Capacidades incluidas - en cards */}
            <div>
              <h3 className="text-lg font-semibold mb-8 text-foreground">Capacidades incluidas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {starProduct.capabilities.map((cap) => (
                  <article key={cap.title} className="glass-card p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <Check className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{cap.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Otras Soluciones */}
        <section id="otras-soluciones" className="py-24 bg-background section-separator">
          <div className="container-wide">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Otras soluciones
              </h2>
              <p className="text-lg text-muted-foreground">
                Proximamante
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-reto" className="py-24 bg-background section-separator">
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              ¿Tienes un reto en mente?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Cuéntanos qué problema quieres resolver. Lo evaluamos contigo y te proponemos el siguiente paso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/lytrium" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Agendar llamada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/es/#contacto">
                <Button variant="hero-outline" size="xl">
                  Escribirnos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductsPage;
