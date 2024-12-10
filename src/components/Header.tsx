
export default function Header() {
  return (
    <header className="text-center">
      <div className="flex justify-center">
        <img src="src/img/logo.png" alt="Logo BAI automation" className="animate-pulse"/>
      </div>
      <h1 className="text-4xl font-bold mb-4 low-margin">
        Te ahorramos <span className="text-blue-500">horas</span> de trabajo con IA
      </h1>
      <p className="text-gray-600 mb-8">
        Te ayudamos a automatizar tareas repetitivas de tu negocio, ahorrar
        <br />
        horas de trabajo y costos
      </p>
      <div className="aspect-video max-w-3xl mx-auto bg-black rounded-lg mb-8">
        {/* video */}
      </div>

      <a href="https://cal.com">
      <button className="bg-blue-600 text-white mt-5 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
        </a>
    </header>
  );
}
