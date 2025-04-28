import { BookOpen, Clock, Download, CheckCircle } from 'lucide-react';
import libro from "../../../img/libro.webp"
import { Timer } from './Timer';
import { useState } from 'react';
import AddressForm from './AddressForm';

function Libro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../../img/10-claves-para-automatizar-tu-negocio.pdf";
    link.download = "10-claves-para-automatizar-tu-negocio.pdf";
    link.click();

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-[#d5aaaa]" />
              <span className="text-[#d5aaaa] font-semibold">Oferta limitada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              10 claves para automatizar tu negocio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Obten GRATIS una copia que te ayudara a mejorar la productividad en tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#d5aaaa] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                <Download className="w-5 h-5" />
                Descargar Ahora
              </button>
              <div className="flex items-center justify-center gap-2 text-[#d5aaaa]">
                <Clock className="w-5 h-5" />
                <span>La oferta termina en:</span>
              </div>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Timer initialHours={48} />
            </div>
          </div>
          
          <div className="flex-1">
            <img
              src={libro}
              alt="Ebook Cover"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Guia sencilla",
              description: "+60 paginas explicandote como automatizar tu negocio"
            },
            {
              title: "Ejemplos reales",
              description: "Aprende sobre experiencias de otros y mejora tus resultados"
            },
            {
              title: "Glosario",
              description: "Listo para mejorar tu comprension sobre terminos que ahora te parecen chino"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-8 h-8 text-[#d5aaaa] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">No pierdas la oportunidad!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Entra en los cientos de dueños de negocios que han mejorado su negocio con este libro.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#d5aaaa] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-purple-700 transition-colors">
            <Download className="w-5 h-5" />
            Obten tu copia gratuita
          </button>
        </div>
      </div>
      {/* Ventana modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
              <AddressForm onSubmit={handleDownload} onCancel={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Libro;