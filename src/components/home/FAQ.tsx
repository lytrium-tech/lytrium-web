import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Esto es solo un chatbot o algo más?',
    answer: [
      'No es un bot de respuestas genéricas.',
      'Es un asistente ejecutivo diseñado para operar procesos reales: atención, seguimiento y análisis de conversaciones.',
      'La diferencia es que no solo responde: reduce fricción operativa y convierte señales de negocio en decisiones más claras con datos.',
    ],
  },
  {
    question: '¿Funciona para cualquier tipo de empresa?',
    answer: [
      'Sí. Trabajamos con empresas de distintos sectores y tamaños.',
      'El punto no es si “se puede automatizar”, sino qué automatización genera más valor en tu caso.',
      'Por eso evaluamos el contexto y los procesos antes de proponer una solución.',
    ],
  },
  {
    question: '¿Qué pasa si mis procesos son específicos o poco comunes?',
    answer: [
      'No trabajamos con soluciones rígidas.',
      'Si tu caso no encaja de inmediato en un flujo estándar, lo evaluamos y te proponemos el enfoque más claro para tu operación.',
      'Nuestro objetivo es que la solución sea sostenible, medible y escalable, sin perder foco.',
    ],
  },
  {
    question: '¿Reemplaza a mi equipo humano?',
    answer: [
      'No.',
      'El sistema se encarga de tareas repetitivas y de primera línea, para que tu equipo se enfoque en lo que requiere criterio humano y toma de decisiones.',
    ],
  },
  {
    question: '¿Qué tipo de información analiza el sistema?',
    answer: [
      'Analiza patrones conversacionales: preguntas frecuentes, puntos de fricción, tiempos de respuesta y señales operativas.',
      'La idea no es “más datos”, sino información útil para mejorar semana a semana.',
    ],
  },
  {
    question: '¿Qué tan complejo es implementar esto en mi empresa?',
    answer: [
      'La implementación se adapta a tu nivel de madurez operativa.',
      'Nos encargamos de la configuración inicial y te guiamos para integrar el sistema sin fricción en el día a día.',
    ],
  },
  {
    question: '¿Mis datos están seguros?',
    answer: [
      'Sí.',
      'Aplicamos prácticas responsables de manejo de información y usamos únicamente los datos necesarios para operar y mejorar el sistema.',
      'Definimos contigo qué se registra y qué no, según tu operación.',
    ],
  },
  {
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: [
      'En la mayoría de los casos, los primeros beneficios se notan en las primeras semanas: menos mensajes manuales, más orden y mejor seguimiento.',
      'La mejora continua aumenta a medida que el sistema aprende del uso real.',
    ],
  },
  {
    question: '¿Esto tiene un costo fijo o depende del alcance?',
    answer: [
      'Depende del alcance y la complejidad.',
      'Siempre iniciamos con una evaluación para definir una propuesta clara, alineada al valor real que aporta a tu operación.',
    ],
  },
  {
    question: '¿Qué sucede si necesito cambiar o escalar la solución?',
    answer: [
      'El sistema está pensado para crecer contigo.',
      'Podemos ajustar capacidades, agregar automatizaciones o profundizar en analítica a medida que el negocio lo requiera.',
    ],
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="section-padding section-separator bg-background"
      aria-labelledby="faq-title"
    >
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Preguntas frecuentes
          </p>
          <h2 id="faq-title" className="heading-section text-balance">
            ¿Tienes dudas?
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((line, i) => (
                    <span key={i} className="block mb-2 last:mb-0">
                      {line}
                    </span>
                  ))
                ) : (
                  faq.answer
                )}
              </AccordionContent>
              
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;