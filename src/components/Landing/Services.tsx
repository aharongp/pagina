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
      description: 'Ahorra tiempo y mejora tu productividad automatizando tus procesos repetitivos'
    },
    {
      icon: BarChart3,
      title: 'Desarrollo de Software',
      description: 'Crea el sistema o aplicacion perfecto para tu negocio'
    },
    {
      icon: Code,
      title: 'Sitios web y APPs',
      description: 'Mejora tu sitio web para que enganche a tu cliente o sube al siguiente nivel e implementa una APP'
    }
  ];

  return (
    <section id='servicios' className="section opacity-0 transform translate-y-10 transition-transform duration-1000 py-32 px-4">
      <h2 className="text-center text-black text-4xl font-bold mb-20">
        Automatiza y potencia tu <span className="text-[#b89595]">negocio</span>
        <br /> con IA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-[4vh]">
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