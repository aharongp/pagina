import { Camera, HandPlatter, Warehouse } from 'lucide-react';
import { ChatbotTexto } from '../../../../types';
import inmoassist from '../../../../img/inmoassist.png';
import researchAssist from '../../../../img/researchAssist.jpeg';
import supportAssist from '../../../../img/supportchatbot.jpeg';



export const chatbotTexto: ChatbotTexto[] = [
  {
    id: 1,
    name: "InmoAssist",
    description: "Un asistente de IA especializado en el sector inmobiliario, diseñado para ayudar a los clientes en la busqueda de propiedades, facilitando agendar visitas a inmuebles.",
    capabilities: ["Procesamiento de Lenguaje Natural", "Automatización de Tareas", "Integración de Base de Conocimientos"],
    icon: <Warehouse className="w-6 h-6" />,
    image: inmoassist,
    features: [
      "Comprensión avanzada del contexto",
      "Respuestas personalizadas",
      "Soporte multilingüe",
      "Acceso a informacion sobre todas las propiedades",
      "Personalizado para un agente o para toda la inmobiliaria",
      "Extracción de datos de clientes"
    ],
    useCases: [
      "Atención al Cliente",
      "Asistente Personal",
      "Automatización de Procesos",
      "Generación de Contenido"
    ],
    technicalSpecs: {
      lenguaje: "JavaScript",
      plataforma: "Botpress",
      despliegue: "Web, whatsapp, IG, etc",
      respuesta: "<10s",
      precision: "85%"
    },
    src1: "https://cdn.botpress.cloud/webchat/v2.2/inject.js",
    src2: "https://files.bpcontent.cloud/2025/03/25/02/20250325023303-QVBFG64Y.js"
  },
  {
    id: 2,
    name: "ResearchAssist",
    description: "Un asistente de IA especializado en la generacion de contenido con las ultimas noticias sobre un tema especifico",
    capabilities: ["Busqueda en la web", "Automatización de Tareas", "Generacion de contenido"],
    icon: <Camera className="w-6 h-6" />,
    image: researchAssist,
    features: [
      "Comprensión avanzada del contexto",
      "Soporte multilingüe",
      "Acceso a informacion sobre noticias actualizadas",
      "Personalizacion para la generacion de contenido",
      "Publicar contenido en RRSS"
    ],
    useCases: [
      "Generador de contenido",
      "Extractor de noticias de blogs",
      "Automatización de contenido",
      "Investigación de mercado"
    ],
    technicalSpecs: {
      lenguaje: "JavaScript",
      plataforma: "Botpress",
      despliegue: "Web, whatsapp, IG, etc",
      respuesta: "<15s",
      precision: "80%"
    },
    src1: "https://cdn.botpress.cloud/webchat/v2.2/inject.js",
    src2: "https://files.bpcontent.cloud/2025/03/31/00/20250331000634-Y1FDBM3T.js"
  },
  {
    id: 2,
    name: "BAIAssist",
    description: "Un asistente de IA especializado en el soporte al cliente con preguntas frecuentes y base de conocimientos",
    capabilities: ["Base de conocimientos", "FQA", "Transferir a un humano"],
    icon: <HandPlatter className="w-6 h-6" />,
    image: supportAssist,
    features: [
      "Acceso a preguntas frecuentes",
      "Soporte multilingüe",
      "Acceso a informacion sobre documentacion",
      "Personalizacion de soporte",
      "Puede transferirte con un humano"
    ],
    useCases: [
      "Soporte al cliente de un software",
      "Buscador de información sobre servicios",
      "Extractor de documentacion de un software",
      "Chatbot de onboarding",
      "Soporte para empleados"
    ],
    technicalSpecs: {
      lenguaje: "JavaScript",
      plataforma: "Botpress",
      despliegue: "Web, whatsapp, IG, etc",
      respuesta: "<3s",
      precision: "95%"
    },
    src1: "https://cdn.botpress.cloud/webchat/v2.2/inject.js",
    src2: "https://files.bpcontent.cloud/2025/03/31/21/20250331213330-YFJNS5WC.js"
  },
];
