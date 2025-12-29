import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import Benefits from '@/components/home/Benefits';
import Portfolio from '@/components/home/Portfolio';
import FAQ from '@/components/home/FAQ';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://lytrium.tech/#organization',
        name: 'Lytrium',
        url: 'https://lytrium.tech',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lytrium.tech/assets/brand/logo.png',
        },
        description: 'Automatización inteligente y asistentes IA para WhatsApp Business. Conectamos datos, automatizamos decisiones.',
        sameAs: ['https://linkedin.com/company/lytrium'],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'lytriums@gmail.com',
          contactType: 'sales',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lytrium.tech/#website',
        url: 'https://lytrium.tech',
        name: 'Lytrium',
        publisher: {
          '@id': 'https://lytrium.tech/#organization',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://lytrium.tech/#service',
        name: 'Automatización con IA y analítica de datos',
        provider: {
          '@id': 'https://lytrium.tech/#organization',
        },
        description: 'Automatizamos atención, ventas y operaciones con IA: WhatsApp, CRM, integraciones y analítica para mejorar decisiones con datos.',
        areaServed: 'CO',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Lytrium | Automatización con IA y Analítica de Datos</title>
        <meta
          name="description"
          content="Automatizamos atención, ventas y operaciones con IA: WhatsApp, integraciones, CRM y analítica de datos. Conectamos datos. Automatizamos decisiones."
        />
        <link rel="canonical" href="https://lytrium.tech/es/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lytrium.tech/es/" />
        <meta property="og:title" content="Lytrium | Automatización con IA y Analítica de Datos" />
        <meta
          property="og:description"
          content="Automatización con IA para WhatsApp y procesos operativos, con analítica de datos para mejorar decisiones."
        />
        <meta property="og:image" content="https://lytrium.tech/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lytrium | Automatización con IA" />
        <meta
          name="twitter:description"
          content="Automatización con IA para WhatsApp y procesos operativos, con analítica de datos para mejorar decisiones."
        />
        <meta name="twitter:image" content="https://lytrium.tech/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      <Layout>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Portfolio />
        <FAQ />
        <CTASection />
      </Layout>
    </>
  );
};

export default HomePage;
