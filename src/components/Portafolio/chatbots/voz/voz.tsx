import { Bot } from 'lucide-react';
import { chatbotVoz } from './infoVoz';
import { Link } from 'react-router-dom';
import { BoxReveal } from '@/components/magicui/box-reveal';

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

      <main className="container mx-auto px-4"><BoxReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotVoz.map((bot) => (
            <div key={bot.id} className="bg-[#586576] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
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
                  <h3 className="text-xl font-semibold">{bot.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{bot.description}</p>
                <div className="space-y-2">
                  {bot.capabilities.map((capability:any, index:any) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-[#b89595] rounded-full mr-2" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-900 border-t border-gray-700 mt-auto">
                <Link 
                  to={`/voz/${bot.id}`}
                  
                  className="block w-full bg-[#b89595] text-gray-100 mt-5 px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/20 text-center"
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div></BoxReveal>
      </main>
    </div>
  );
}