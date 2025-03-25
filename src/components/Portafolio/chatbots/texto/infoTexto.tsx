import { Warehouse } from 'lucide-react';
import { ChatbotTexto } from '../../../../types';
import inmoassist from '../../../../img/inmoassist.png';

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
];


{/* <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/03/25/02/20250325023303-QVBFG64Y.js"></script> */}
    