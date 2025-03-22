import { useEffect, useState } from "react";
import { Square, useWindowSize } from "../Landing/Home";
import Header from "./Header";
import Texto from "./chatbots/texto/texto";

export default function Portafolio(){
  const [squares, setSquares] = useState([]);
  const { width } = useWindowSize();
  
  
  useEffect(() => {
    const generateRandomSquares = (num: number) => {
      const newSquares: Square[] = [];
      for (let i = 0; i < num; i++) {
        const x = Math.floor(Math.random() * (width -25)); // Ajusta según el tamaño del contenedor
        if(width < 600){
          const y = Math.floor(Math.random() * 6000); // Ajusta según el tamaño del contenedor
          newSquares.push({ x, y });

        }else{
          const y = Math.floor(Math.random() * 4000); // Ajusta según el tamaño del contenedor
          newSquares.push({ x, y });
        }
      }
      setSquares(newSquares as never[]);
    };

    generateRandomSquares(200); // Genera 10 cuadrados aleatorios

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.remove('opcity-0', 'translate-y-10');
          section.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#f2f4f5] text-white fondo-cuadriculado">
      <div className="">
      {squares.map((square: Square, index) => (
            <div
              key={index}
              className="cuadro cuadro-verde animate-pulse"
              style={{
                position: 'absolute',
                width: '15px',
                height: '15px',
                left: `${square.x}px`,
                top: `${square.y}px`,
              }}
            />
          ))}
        <div className="relative z-10 p-8">
            <Header />
            <Texto />
        </div>
      </div>
    </div>
  );
}





