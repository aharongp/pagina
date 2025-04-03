import { CalendarCheck, Brain } from 'lucide-react';
import { ChatbotVoz } from '../../../../types';
import dentistassist from '../../../../img/dentistassist.webp';
import appointmentSetter from '../../../../img/appointmentSetter.webp';


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
  },
  {
    id: 2,
    name: "Setter",
    description: "Un chatbot especializado para campañas de marketing y agendar reuniones. A demas de hacer llamadas automáticas",
    capabilities: ["Voz en español", "Llamadas automaticas", "Integración de Base de datos"],
    icon: <CalendarCheck className="w-6 h-6" />,
    image: appointmentSetter,
    features: [
      "Entendimiento avanzado de contexto",
      "Transcipción en tiempo real",
      "Voz y respuestas personalizadas",
      "Soporte en español",
      "Llamadas nacionales",
      "Llamadas automaticas a una base de datos",
      "Recomendaciones: La llamada de prueba es una simulacion donde el chatbot llama a Miguel porque se suscribio a un newsletter y quiere ver si le gustaria agendar una reunion"
    ],
    useCases: [
      "Campañas de marketing",
      "Encuestas de calidad de productos",
      "Appointment setter",
      "Asistente de Ventas",
      "Confirmación de Asistencia"
    ],
    technicalSpecs: {
      lenguaje: "No especificado",
      plataforma: "Retell AI",
      despliegue: "Web, numero de Twilio",
      respuesta: "<1000ms",
      precision: "87%"
    },
    agentId: 'agent_e3eb0782eeb4396ce325f30ef3'
  }
];