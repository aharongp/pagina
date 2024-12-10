import { MessageSquare, Zap, BarChart3, Code } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'No pierdas tiempo, ni dinero contestando los mensajes tu mismo'
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Ahorra tiempo y mejora tu productividad automatizando'
    },
    {
      icon: BarChart3,
      title: 'Marketing Ads y SEO',
      description: 'Potencia tu negocio, mejora tus ventas y tu conversion'
    },
    {
      icon: Code,
      title: 'Sitios web y APPs',
      description: 'Mejora tu sitio web para que enganche a tu cliente. O sube al siguiente nivel e implementa una APP'
    }
  ];

  return (
    <section className="section opacity-0 transform translate-y-10 transition-transform duration-1000 py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-20">
        Automatiza y potencia tu <span className="text-blue-500">negocio</span>
        <br /> con IA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            Icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}