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
    <header className="text-center">
      <div className="flex-none w-1/4 p-3 -mt-10"> {/* Ajusta el ancho según sea necesario */}
        <Comentarios />
      </div>
      <button className="absolute right-10 -mt-[20vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
      <button className="absolute right-10 -mt-[27vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
          Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
      <button className="absolute right-[30vh] -mt-[35vh] bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
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
