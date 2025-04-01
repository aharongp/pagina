import { Comentarios } from "./Comentarios";
import { useWindowSize } from "./Home";
import { ShinyButton } from "../magicui/shiny-button";
import { BoxReveal } from "../magicui/box-reveal";


export default function Header() {
  const { width } = useWindowSize();
  if (width < 600){
    return (
      <header className="text-center">
        <h1 className="text-4xl ibm-plex-serif-thin font-bold mb-4 low-margin text-black">
          Te ahorramos <span className="text-[#552f3b]">horas</span> de trabajo con IA
        </h1>
        <p className="text-gray-600 mb-8 ">
          Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
          <br />
          horas de trabajo y costos
        </p>
      </header>
    );
  }
  return (
    <header className="text-center -mt-32" >
      <div className="flex-none w-1/4 p-3"><BoxReveal>{/* Ajusta el ancho según sea necesario */}
        <Comentarios /></BoxReveal>
      </div>
  
      <button className="absolute right-[20vh] -mt-[60vh]"><BoxReveal><ShinyButton className="futuristic-button">
          B.AI AUTOMATION</ShinyButton></BoxReveal>
      </button>
    

      <button className="absolute right-[20vh] -mt-[52vh]"><BoxReveal><ShinyButton className="futuristic-button">
          Servicios</ShinyButton></BoxReveal>
      </button>

      <button className="absolute right-[20vh] -mt-[44vh]"><BoxReveal><ShinyButton className="futuristic-button">
          Como Iniciar Con Nosotros</ShinyButton></BoxReveal>
      </button>


      <button className="absolute right-[20vh] -mt-[36vh]"><BoxReveal><ShinyButton className="futuristic-button">
          Beneficios</ShinyButton></BoxReveal>
      </button>

      <button className="absolute right-[20vh] -mt-[28vh]"><BoxReveal><ShinyButton className="futuristic-button">
          Preguntas Usuales</ShinyButton></BoxReveal>
      </button>


      <div className="text-right">
        <h1 className="text-4xl ibm-plex-serif-thin font-bold mb-4 low-margin text-black">
          Te ahorramos <span className="text-[#552f3b]">horas</span> de trabajo con IA
        </h1>
        <p className="text-gray-600 mb-8 ">
          Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
          <br />
          horas de trabajo y costos
        </p>
      </div>

      <div style={{ height: "24vh" }} />
    </header>
  );
}
