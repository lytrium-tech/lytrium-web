import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Lytrium</title>
        <meta
          name="description"
          content="Política de privacidad de Lytrium. Conoce cómo tratamos tus datos personales."
        />
        <link rel="canonical" href="https://lytrium.tech/es/privacy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Layout>
        <article className="pt-40 pb-24 bg-background">
          <div className="container-narrow">
            <header className="mb-12">
              <h1 className="heading-section mb-4">Política de Privacidad</h1>
              <p className="text-muted-foreground">
                Última actualización: Enero 2025
              </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Responsable del tratamiento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lytrium (en adelante, "nosotros") es responsable del tratamiento de los datos 
                  personales recogidos a través de este sitio web. Puedes contactarnos en 
                  hola@lytrium.tech para cualquier consulta relacionada con privacidad.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Datos que recogemos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos recoger los siguientes tipos de datos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Datos de contacto (nombre, email, teléfono) cuando nos escribes</li>
                  <li>Datos de navegación mediante cookies analíticas</li>
                  <li>Información técnica del dispositivo y navegador</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Finalidad del tratamiento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos tus datos para responder a tus consultas, mejorar nuestros servicios, 
                  y enviarte información comercial si nos das tu consentimiento.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Base legal</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El tratamiento de tus datos se basa en tu consentimiento, la ejecución de un 
                  contrato o precontrato, y nuestro interés legítimo en mejorar nuestros servicios.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Tus derechos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la supresión de tus datos</li>
                  <li>Oponerte al tratamiento</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para ejercer tus derechos o cualquier consulta sobre privacidad, escríbenos a 
                  hola@lytrium.tech.
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PrivacyPage;
