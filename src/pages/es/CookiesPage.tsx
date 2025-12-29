import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Lytrium</title>
        <meta
          name="description"
          content="Política de cookies de Lytrium. Conoce cómo utilizamos las cookies en nuestro sitio web."
        />
        <link rel="canonical" href="https://lytrium.tech/es/cookies/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Layout>
        <article className="pt-40 pb-24 bg-background">
          <div className="container-narrow">
            <header className="mb-12">
              <h1 className="heading-section mb-4">Política de Cookies</h1>
              <p className="text-muted-foreground">
                Última actualización: Enero 2025
              </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
                  cuando visitas un sitio web. Nos permiten recordar tus preferencias y mejorar 
                  tu experiencia de navegación.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies que usamos</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cookies técnicas (necesarias)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Esenciales para el funcionamiento del sitio. Incluyen la preferencia de 
                      tema (claro/oscuro).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cookies analíticas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos ayudan a entender cómo los usuarios interactúan con el sitio para 
                      mejorar su funcionamiento.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Gestión de cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes configurar tu navegador para rechazar cookies o para que te avise cuando 
                  se envían. Ten en cuenta que algunas funciones del sitio pueden no funcionar 
                  correctamente si deshabilitas las cookies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Cookies de terceros</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos utilizar servicios de terceros (como Google Analytics) que establecen 
                  sus propias cookies. Consulta las políticas de privacidad de estos servicios 
                  para más información.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Más información</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre nuestra política de cookies, contacta con nosotros 
                  en lytriums@gmail.com.
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default CookiesPage;
