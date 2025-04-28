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
        Te ahorramos <span className="text-[#552f3b]">horas</span> de trabajo con agentes de inteligencia artificial
        </h1>
        <p className="text-gray-600 mb-8 ">
          Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
          <br />
          horas de trabajo y costos
        </p>
      </header>
    );
  }

  if ((600 < width) && (width < 1500)){
    return (
      <header className="text-center -mt-32" >


      <div className="text-center mt-[45vh]" >
        <h1 className="text-4xl ibm-plex-serif-thin font-bold mb-4 low-margin text-black">
          Te ahorramos <span className="text-[#552f3b]">horas</span> de trabajo con <br />Agentes de Inteligencia Artificial
        </h1>
        <p className="text-gray-600 mb-8 ">
          Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
          <br />
          horas de trabajo y costos
        </p>
      </div>

      <div style={{ height: "30vh" }} />
    </header>
    );
  }



  return (
    <header className="text-center -mt-32" >
      <div className="flex-none w-1/4 p-30 ml-10 mt-10"><BoxReveal>
        <Comentarios /></BoxReveal>
      </div>
  
      <a href="#video">
        <button className="absolute right-[42vh] -mt-[53vh]"><BoxReveal><ShinyButton className="futuristic-button">
            BAI AUTOMATION</ShinyButton></BoxReveal>
        </button>
      </a>
    
      <a href="#servicios">
        <button className="absolute right-[40vh] -mt-[45vh]"><BoxReveal><ShinyButton className="futuristic-button">
            Servicios</ShinyButton></BoxReveal>
        </button>
      </a>

      <a href="#inicia">
        <button className="absolute right-[30vh] -mt-[37vh]"><BoxReveal><ShinyButton className="futuristic-button">
            Como Iniciar Con Nosotros</ShinyButton></BoxReveal>
        </button>
      </a>

      <a href="#beneficios">
        <button className="absolute right-[40vh] -mt-[29vh]"><BoxReveal><ShinyButton className="futuristic-button">
            Beneficios</ShinyButton></BoxReveal>
        </button>
      </a>

      <a href="#FQA">
        <button className="absolute right-[39vh] -mt-[21vh]"><BoxReveal><ShinyButton className="futuristic-button">
            Preguntas Usuales</ShinyButton></BoxReveal>
        </button>
      </a>


      <div className="text-right -mt-[5vh]" >
        <h1 className="text-4xl ibm-plex-serif-thin font-bold mb-4 low-margin text-black">
          Te ahorramos <span className="text-[#552f3b]">horas</span> de trabajo con <br />Agentes de Inteligencia Artificial
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
