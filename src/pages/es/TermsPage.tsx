import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Lytrium</title>
        <meta
          name="description"
          content="Términos y condiciones de uso del sitio web de Lytrium."
        />
        <link rel="canonical" href="https://lytrium.tech/es/terms/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Layout>
        <article className="pt-40 pb-24 bg-background">
          <div className="container-narrow">
            <header className="mb-12">
              <h1 className="heading-section mb-4">Términos y Condiciones</h1>
              <p className="text-muted-foreground">
                Última actualización: Enero 2025
              </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los términos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Al acceder y utilizar este sitio web, aceptas estos términos y condiciones en 
                  su totalidad. Si no estás de acuerdo con alguna parte, no utilices este sitio.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Uso del sitio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este sitio web es propiedad de Lytrium y tiene fines informativos sobre nuestros 
                  servicios. Queda prohibido cualquier uso no autorizado del contenido.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Propiedad intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo el contenido de este sitio (textos, imágenes, logos, código) está protegido 
                  por derechos de propiedad intelectual y pertenece a Lytrium o sus licenciantes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Limitación de responsabilidad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lytrium no garantiza la disponibilidad continua del sitio ni se hace responsable 
                  de errores u omisiones en el contenido. El uso del sitio es bajo tu propia 
                  responsabilidad.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Enlaces externos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Este sitio puede contener enlaces a sitios de terceros. No nos hacemos 
                  responsables del contenido o políticas de privacidad de esos sitios.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Modificaciones</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios entrarán en vigor desde su publicación en el sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Ley aplicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estos términos se rigen por la legislación colombiana. Cualquier disputa será
                  sometida a los tribunales competentes de Bogotá D.C., Colombia.
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default TermsPage;
