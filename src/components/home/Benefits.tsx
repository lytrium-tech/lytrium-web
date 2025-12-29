const metrics = [
  {
    value: '85%',
    label: 'Reducción tiempo de respuesta',
    description: 'Respuestas instantáneas 24/7',
  },
  {
    value: '3x',
    label: 'Más leads cualificados',
    description: 'Filtrado automático de prospectos',
  },
  {
    value: '60%',
    label: 'Ahorro en costes operativos',
    description: 'Menos personal, más eficiencia',
  },
  {
    value: '24/7',
    label: 'Disponibilidad total',
    description: 'Sin horarios, sin esperas',
  },
];

const Benefits = () => {
  return (
    <section
      id="beneficios"
      className="section-padding section-separator bg-background"
      aria-labelledby="benefits-title"
    >
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Resultados reales
          </p>
          <h2 id="benefits-title" className="heading-section text-balance">
            Números que hablan
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nuestros clientes ven resultados desde el primer mes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className="glass-card p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-4 transition-transform group-hover:scale-105">
                {metric.value}
              </div>
              <h3 className="font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
