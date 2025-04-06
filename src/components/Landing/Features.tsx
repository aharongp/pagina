import dashboard from '../../img/dashboard.webp'
import { ShinyButton } from '../magicui/shiny-button';

export default function Features() {
  return (
    <section id='beneficios' className="section opacity-0 transform translate-y-10 transition-transform duration-1000 py-16 px-4 " >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <div className="inline-block bg-[#121213] px-6 py-2 rounded-full mb-4">
                <span className="text-white font-semibold">Ahorra tiempo</span>
              </div>
            </div>
            <h2 className="text-4xl text-black font-bold mb-6">
              Ahorra tiempo{' '}
              <br />
              automatizando{' '}
              <span className="text-[#b89595]">flujos de</span>
              <br />
              <span className="text-[#b89595]">trabajo con IA</span>
            </h2>
            <p className="text-gray-500 mb-6">
              Reducir los errores y tener más eficiencia aumentará la productividad de tu empresa y podrás invertir el tiempo en lo que realmente importa
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Personalizable
              </li>
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Escalable
              </li>
              <li className="flex items-center text-black">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Reduce los costos
              </li>
            </ul>
            <a href="https://cal.com/baiautomation/60-min-meeting">
            <button className="bg-[#d5aaaa] text-gray-100 px-6 py-3 mt-[2vh] rounded-lg border border-black hover:bg-[#af7676] transition shadow-lg shadow-[#d4a5a5]/100">
              <ShinyButton>
                Agendar consultoría <span className="font-bold">GRATIS</span>
              </ShinyButton>
            </button>
            </a>
          </div>
          <div>
            <img
              src={dashboard}
              alt="Analytics Dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}