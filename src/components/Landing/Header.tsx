import { Comentarios } from "./Comentarios";
import { useWindowSize } from "./Home";

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
      <div className="flex-none w-1/4 p-3"> {/* Ajusta el ancho según sea necesario */}
        <Comentarios />
      </div>
      <button className="absolute right-[43vh] -mt-[60vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
      <button className="absolute right-[41vh] -mt-[52vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
      <button className="absolute right-[40vh] -mt-[44vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
      <button className="absolute right-[40vh] -mt-[36vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
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
