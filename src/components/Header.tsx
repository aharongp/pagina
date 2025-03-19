import logo from '../img/logo6.png';
export default function Header() {
  return (
    <header className="text-center">
      <div className="flex justify-center margen-abajo">
        <img src={logo} alt="Logo BAI automation" width={305} className="animate-pulse"/>
      </div>
      <h1 className="text-4xl ibm-plex-serif-thin font-bold mb-4 low-margin text-black">
        Te ahorramos <span className="text-[#b89595]">horas</span> de trabajo con IA
      </h1>
      <p className="text-gray-600 mb-8 ">
        Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
        <br />
        horas de trabajo y costos
      </p>
      <div className="aspect-video max-w-3xl mx-auto bg-black rounded-2xl mb-8">
      <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/AwcXf55si_Y?si=HUUHceDlB0-aGx4A" title="video de introduccion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <a href="https://cal.com/baiautomation/60-min-meeting">
      <button className="bg-[#b89595] text-gray-100 mt-5 px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
        Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
        </a>
    </header>
  );
}
