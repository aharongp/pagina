import { RetellWebClient } from "retell-client-js-sdk";
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Square, useWindowSize } from '../../../Landing/Home';
import { chatbotVoz } from "./infoVoz";

interface RegisterCallResponse {
  access_token: string;
}
interface TranscriptItem {
  role: string;
  content: string;
}

const retellWebClient = new RetellWebClient();



export default function ChatbotVozDetail() {
  const { id } = useParams();
  const chatbot = chatbotVoz.find(bot => bot.id === Number(id));
  const [squares, setSquares] = useState([]);
  const { width } = useWindowSize();
  const [isCalling, setIsCalling] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptItem[]>([]);

  const agentId = chatbot?.agentId as string;

    useEffect(() => {
      retellWebClient.on("call_started", () => {
        console.log("call started");
      });
      
      retellWebClient.on("call_ended", () => {
        console.log("call ended");
        setIsCalling(false);
      });
      
      // When agent starts talking for the utterance
      // useful for animation
      retellWebClient.on("agent_start_talking", () => {
        console.log("agent_start_talking");
      });
      
      // When agent is done talking for the utterance
      // useful for animation
      retellWebClient.on("agent_stop_talking", () => {
        console.log("agent_stop_talking");
      });
      
      
      // Update message such as transcript
      // You can get transcrit with update.transcript
      // Please note that transcript only contains last 5 sentences to avoid the payload being too large
      const handleUpdate = (update: { transcript: TranscriptItem[] }) => {
        if (update.transcript) {
          setTranscript(update.transcript);
        }
      };
      retellWebClient.on("update", handleUpdate);

      
      retellWebClient.on("error", (error) => {
        console.error("An error occurred:", error);
        // Stop the call
        retellWebClient.stopCall();
      });

      const generateRandomSquares = (num: number) => {
        const newSquares: Square[] = [];
        for (let i = 0; i < num; i++) {
          const x = Math.floor(Math.random() * (width -25)); // Ajusta según el tamaño del contenedor
          if(width < 600){
            const y = Math.floor(Math.random() * 1500); // Ajusta según el tamaño del contenedor
            newSquares.push({ x, y });
  
          }else{
            const y = Math.floor(Math.random() * 900); // Ajusta según el tamaño del contenedor
            newSquares.push({ x, y });
          }
        }
        setSquares(newSquares as never[]);
      };
  
      generateRandomSquares(200); // Genera 10 cuadrados aleatorios
  
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.remove('opcity-0', 'translate-y-10');
            section.classList.add('opacity-100', 'translate-y-0');
          }
        });
      };
  
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
        retellWebClient.off("call_started");
        retellWebClient.off("call_ended");
        retellWebClient.off("agent_start_talking");
        retellWebClient.off("agent_stop_talking");
        retellWebClient.off("update");
        retellWebClient.off("error");
      };
    }, []);

  
    const toggleConversation = async () => {
      if (isCalling) {
        retellWebClient.stopCall();
      } else {
        const registerCallResponse = await registerCall(agentId);
        if (registerCallResponse.access_token) {
          retellWebClient
            .startCall({
              accessToken: registerCallResponse.access_token,
            })
            .catch(console.error);
          setIsCalling(true); // Update button to "Stop" when conversation starts
        }
      }
    };
  
    async function registerCall(agentId: string): Promise<RegisterCallResponse> {
      try {
        // Update the URL to match the new backend endpoint you created
        const response = await fetch("https://backend-call-chatbots.onrender.com/create-web-call", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            agent_id: agentId, // Pass the agentId as agent_id
            // You can optionally add metadata and retell_llm_dynamic_variables here if needed
            // metadata: { your_key: "your_value" },
            // retell_llm_dynamic_variables: { variable_key: "variable_value" }
          }),
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
    
        const data: RegisterCallResponse = await response.json();
        return data;
      } catch (err) {
        console.log(err);
        throw new Error(err as string);
      }
    }

  if (!chatbot) {
    return (
          <div className="min-h-screen bg-[#f2f4f5] text-white fondo-cuadriculado">
            <div className="">
            {squares.map((square: Square, index) => (
                  <div
                    key={index}
                    className="cuadro cuadro-verde animate-pulse"
                    style={{
                      position: 'absolute',
                      width: '15px',
                      height: '15px',
                      left: `${square.x}px`,
                      top: `${square.y}px`,
                    }}
                  />
                ))}
              <div className="relative z-10 p-8">
                <div className="container mx-auto mt-64 text-center">
                  <h1 className="text-3xl text-[#b89595] font-bold mb-4">Chatbot no encontrado</h1>
                  <Link to="/portafolio" className="text-black font-bold hover:text-blue-300 flex items-center justify-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    volver al portafolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#f2f4f5] text-white fondo-cuadriculado">
    <div className="">
    {squares.map((square: Square, index) => (
          <div
            key={index}
            className="cuadro cuadro-verde animate-pulse"
            style={{
              position: 'absolute',
              width: '15px',
              height: '15px',
              left: `${square.x}px`,
              top: `${square.y}px`,
            }}
          />
        ))}
      <div className="relative z-10 p-8">
     {/* Hero Section */}
     <div className="relative h-96">
        <img 
          src={chatbot.image} 
          alt={chatbot.name}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#586576]/80 to-transparent rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/portafolio" className="text-black hover:text-[#b89595] flex items-center mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Link>
            <div className="flex items-center mb-2">
              <div className="p-2 bg-[#b89595] rounded-lg mr-3">
                {chatbot.icon}
              </div>
              <h1 className="text-4xl font-bold">{chatbot.name}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">{chatbot.description}</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features Section */}
          <div className="bg-[#586576] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-[#b89595] mr-2" />
              <h2 className="text-2xl font-semibold">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {chatbot.features?.map((feature:any, index:any) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#b89595] rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Section */}
          <div className="bg-[#586576] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-[#b89595] mr-2" />
              <h2 className="text-2xl font-semibold">Use Cases</h2>
            </div>
            <ul className="space-y-3">
              {chatbot.useCases?.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-[#b89595] rounded-full" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs Section */}
          <div className="bg-[#586576] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Cpu className="w-6 h-6 text-[#b89595] mr-2" />
              <h2 className="text-2xl font-semibold">Technical Specs</h2>
            </div>
            <div className="space-y-3">
              {chatbot.technicalSpecs && Object.entries(chatbot.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-400 capitalize">{key}</span>
                  <span className="font-mono bg-gray-700 px-2 py-1 rounded">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="transcript-container">
          <h1>Transcripción de la Llamada</h1>
          <div className="messages">
            {transcript.map((item, index) => (
              <div key={index} className={`message ${item.role}`}>
                <span>{item.role}: {item.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="mt-12 text-center">
          <button onClick={toggleConversation} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
          {isCalling ? "Terminar conversacion" : "Comenzar conversacion"}
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}