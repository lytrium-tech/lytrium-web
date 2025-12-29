import { MessageSquare, Zap, BarChart3 } from 'lucide-react';
const steps = [{
  icon: MessageSquare,
  number: '01',
  title: 'Conectamos tu WhatsApp',
  description: 'Integramos tu cuenta de WhatsApp Business con nuestro motor de IA en menos de 24 horas.'
}, {
  icon: Zap,
  number: '02',
  title: 'Entrenamos tu asistente',
  description: 'Configuramos respuestas, flujos y personalidad según tu negocio y tono de marca.'
}, {
  icon: BarChart3,
  number: '03',
  title: 'Automatizas y escalas',
  description: 'Tu asistente atiende, cualifica leads y agenda citas mientras tú te enfocas en cerrar.'
}];
const HowItWorks = () => {
  return <section id="como-funciona" className="section-padding section-separator bg-background" aria-labelledby="how-it-works-title">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Proceso simple
          </p>
          <h2 id="how-it-works-title" className="heading-section text-balance">
            Cómo funciona
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            En tres pasos tendrás un asistente inteligente atendiendo a tus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => <article key={step.number} className="glass-card p-8 lg:p-10 group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-5xl font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </article>)}
        </div>
      </div>
    </section>;
};
export default HowItWorks;