import { Brain } from 'lucide-react';
import { ChatbotVoz } from '../../../../types';
import dentistassist from '../../../../img/dentistassist.jpeg';


export const chatbotVoz: ChatbotVoz[] = [
  {
    id: 1,
    name: "DentistAssist",
    description: "Un chatbot especializado en servicios dentales que da información y precios, a demás de agendar citas.",
    capabilities: ["Voz en español", "Automatización de Tareas", "Integración de Base de Conocimientos"],
    icon: <Brain className="w-6 h-6" />,
    image: dentistassist,
    features: [
      "Entendimiento avanzado de contexto",
      "Transcipción en tiempo real",
      "Voz y respuestas personalizadas",
      "Soporte en español",
      "Llamadas nacionales"
    ],
    useCases: [
      "Servicio al cliente",
      "Asistente personal",
      "Appointment setter",
      "Automatizacion de campañas"
    ],
    technicalSpecs: {
      lenguaje: "No especificado",
      plataforma: "Retell AI",
      despliegue: "Web, numero de Twilio",
      respuesta: "<1100ms",
      precision: "89%"
    },
    agentId: 'agent_bfdc2ed2ba09c069c7a1c8967a'
  }
];