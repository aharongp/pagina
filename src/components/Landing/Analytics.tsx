import { Brain, BarChart2, TrendingUp } from 'lucide-react';
import analytics from '../../img/unlock.webp';
import { NeonGradientCard } from '../magicui/neon-gradient-card';

export default function Analytics() {
  return (
    <section className=" section opacity-0 transform translate-y-10 transition-transform duration-1000 py-8 px-4" >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
                <img src={analytics} alt="Unlock image"/>
            </div>
          </div>
          <div className="order-1 md:order-2">
          <div className="flex justify-start mb-8">
          <div className="inline-block bg-[#121213] px-6 py-2 rounded-full mb-4">
            <span className="text-white font-semibold">Mejora estilos</span>
          </div>
        </div>
            <h2 className="text-2xl font-bold mb-8 text-black">
              <span className="text-[#b89595]">Hipnotiza</span> a tus leads y lee mejor las{' '}
              <span className="text-[#b89595]">estadísticas</span> de tu negocio
            </h2>
            <div className="space-y-4">
            <div className="  rounded-lg flex items-center gap-4 text-gray-700">
              <NeonGradientCard className="flex items-center p-0.5 hover:bg-[#748396] ">
                <span className="flex items-center">
                  <Brain className="w-6 h-6 text-[#a35353] flex-shrink-0" />
                  <span className="ml-3">Mejora por completo la talla de tu sitio web o App</span>
                </span>
              </NeonGradientCard>
            </div>

            <div className="  rounded-lg flex items-center gap-4 text-gray-700">
              <NeonGradientCard className="flex items-center p-0.5 hover:bg-[#748396] ">
                <span className="flex items-center">
                  <BarChart2 className="w-6 h-6 text-[#418a92] flex-shrink-0" />
                  <span className="ml-3">Entiende tus estadísticas en un reporte claro con IA avanzada</span>
                </span>
              </NeonGradientCard>
            </div>

            <div className="  rounded-lg flex items-center gap-4 text-gray-700">
              <NeonGradientCard className="flex items-center p-0.5 hover:bg-[#748396] ">
                <span className="flex items-center">
                  <TrendingUp  className="w-6 h-6 text-[#458053] flex-shrink-0" />
                  <span className="ml-3">Sube de leads más rápido con ayuda del marketing inteligente</span>
                </span>
              </NeonGradientCard>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

