import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  delay: number;
}

const messages: Message[] = [
  { id: 1, text: 'Hola, necesito acelerar la atención sin perder calidad.', isBot: false, delay: 0 },
  { id: 2, text: 'Claro. Conectamos tus datos para responder y escalar automáticamente con IA.', isBot: true, delay: 800 },
  { id: 3, text: '¿Quieres que armemos un flujo para ventas o soporte primero?', isBot: true, delay: 1600 },
  { id: 4, text: 'Ventas, pero con seguimiento 24/7.', isBot: false, delay: 2400 },
  { id: 5, text: 'Listo. Te propongo un demo con métricas reales esta semana.', isBot: true, delay: 3200 },
  { id: 6, text: 'Para continuar haz click en el botón de abajo ↓', isBot: true, delay: 4000 },
];

const WhatsAppChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    messages.forEach((message) => {
      // Show typing indicator before bot messages
      if (message.isBot && message.delay > 0) {
        setTimeout(() => {
          setIsTyping(true);
        }, message.delay - 500);
      }

      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, message.id]);
      }, message.delay);
    });
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-3xl border border-border/30 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* WhatsApp header */}
        <div className="bg-primary/10 px-4 py-3 flex items-center gap-3 border-b border-border/20">
          <img 
            src="/Icono.png" 
            alt="Lytrium" 
            className="h-6 w-auto squared-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm text-foreground">Lytrium IA</p>
            <p className="text-xs text-muted-foreground">En línea · Responde al instante</p>
          </div>
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
        </div>

        {/* Chat messages */}
        <div className="p-4 space-y-3 min-h-[320px] bg-gradient-to-b from-transparent to-muted/10">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'} transition-all duration-300 ${
                visibleMessages.includes(message.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[10px] text-muted-foreground mb-1 px-1">
                {message.isBot ? 'Lytrium IA' : 'Tú'}
              </span>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm backdrop-blur-sm ${
                  message.isBot
                    ? 'bg-[rgba(251,200,83,0.2)] border border-[rgba(251,200,83,0.3)] text-foreground rounded-tl-sm'
                    : 'bg-foreground/10 border border-foreground/20 text-foreground rounded-tr-sm'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[rgba(251,200,83,0.2)] border border-[rgba(251,200,83,0.3)] backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-border/20">
          <a
            href="https://wa.me/573000000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="w-full" size="lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              Ver demo en WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
