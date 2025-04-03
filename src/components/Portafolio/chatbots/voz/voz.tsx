import { Bot } from 'lucide-react';
import { chatbotVoz } from './infoVoz';
import { Link } from 'react-router-dom';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { NeonGradientCard2 } from '@/components/magicui/neon-grading-card-2';
export default function Voz() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-12 text-center">
        <div className="flex items-center justify-center mb-6">
          <Bot className="w-12 h-12 text-[#b89595] mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b89595] to-purple-500">
            Chatbots de voz
          </h1>
        </div>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Descrubre algunas demos de nuestros chatbots de voz
        </p>
      </header>

      <main className="container mx-auto px-12"><BoxReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {chatbotVoz.map((bot) => (
            <div key={bot.id} className="bg-[#586576] rounded-xl overflow-hidden shadow-lg transform border-2 border-black transition-transform duration-300 flex flex-col"><NeonGradientCard2>
              <div className="h-48 overflow-hidden border-2 border-gray-700 rounded-xl">
                <img 
                  src={bot.image}
                  alt={bot.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#b89595] rounded-lg mr-3">
                    {bot.icon}
                  </div>
                  <h3 className="text-xl text-gray-700 font-semibold">{bot.name}</h3>
                </div>
                <p className="text-gray-500 mb-4">{bot.description}</p>
                <div className="space-y-2 text-gray-900" >
                  {bot.capabilities.map((capability:any, index:any) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-[#9e4235] rounded-full mr-2" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link 
                  to={`/voz/${bot.id}`}
                  
                  className="block w-full bg-[#696969] text-gray-100  px-2 py-2 border-2 border-black rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/20 text-center"
                >
                  Ver más
                </Link>
              </div></NeonGradientCard2>
            </div>
          ))}
        </div></BoxReveal>
      </main>
    </div>
  );
}