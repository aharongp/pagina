import { Brain, BarChart2, TrendingUp } from 'lucide-react';
import unlock from './img/unlock.png'

export default function Analytics() {
  return (
    <section className=" section opacity-0 transform translate-y-10 transition-transform duration-1000 py-8 px-4" >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Brain className="w-32 h-32 text-blue-500" />
              </div> */}
                <img src={unlock} alt="Unlock image" className=''/>
            </div>
          </div>
          <div className="order-1 md:order-2">
          <div className="flex justify-start mb-8">
          <div className="inline-block bg-black px-6 py-2 rounded-full mb-4">
            <span className="text-white font-semibold">Mejora estilos</span>
          </div>
        </div>
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-blue-500">Hipnotiza</span> a tus leads y lee mejor las{' '}
              <span className="text-blue-500">estadísticas</span> de tu negocio
            </h2>
            <div className="space-y-4">
              <div className="bg-[#0A0A1B] p-4 rounded-lg flex items-center gap-4">
                <Brain className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>Mejora por completo la talla de tu sitio web o App</span>
              </div>
              <div className="bg-[#0A0A1B] p-4 rounded-lg flex items-center gap-4">
                <BarChart2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>Entiende tus estadísticas en un reporte claro con IA avanzada</span>
              </div>
              <div className="bg-[#0A0A1B] p-4 rounded-lg flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>Sube de leads más rápido y con el típico hipnotismo del marketing con IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}