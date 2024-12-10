import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-4 text-left flex justify-between items-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180 ease-linear duration-300' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && <div className="pb-4 text-gray-400">{answer}</div>}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: '¿La información de mi empresa estará segura?',
      answer: 'Sí, garantizamos la seguridad y confidencialidad de todos tus datos.'
    },
    {
      question: '¿Cuánto necesito invertir en la implementación de IA?',
      answer: 'La inversión varía según tus necesidades específicas. Programemos una consulta gratuita para discutirlo.'
    },
    {
      question: '¿Por qué debería usar la IA en mi negocio?',
      answer: 'La IA puede automatizar tareas repetitivas, mejorar la eficiencia y reducir costos operativos.'
    },
    {
      question: '¿Que otros servicios ofrecen?',
      answer: 'Principalmente son los servicios de chatbots y automatizaciones pero tambien manejamos instalaciones de softwares administrativos, creaciones de dashboards y puedes contactarnos si quieres una plataforma.'
    }
  ];

  return (
    <section className=" section opacity-0 transform translate-y-10 transition-transform duration-1000 py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">
        Puede que tengas algunas <span className="text-blue-500">preguntas</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-4 transition" >
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}