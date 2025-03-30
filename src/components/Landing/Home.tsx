import Header from './Header';
import { useEffect, useState } from 'react';
import Services from './Services';
import Features from './Features';
import Analytics from './Analytics';
import Steps from './Steps';
import FAQ from './FAQ';
import CallToAction from './CallToAction';
import { AnimatedGridPattern } from '../magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

export type Square = {
  x: number;
  y: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
  });

  useEffect(() => {
      const handleResize = () => {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};


function Home() {
  // const [squares, setSquares] = useState([]);
  // const { width } = useWindowSize();
  
  
  useEffect(() => {
    // const generateRandomSquares = (num: number) => {
    //   const newSquares: Square[] = [];
    //   for (let i = 0; i < num; i++) {
    //     const x = Math.floor(Math.random() * (width -25)); // Ajusta según el tamaño del contenedor
    //     if(width < 600){
    //       const y = Math.floor(Math.random() * 6000); // Ajusta según el tamaño del contenedor
    //       newSquares.push({ x, y });

    //     }else{
    //       const y = Math.floor(Math.random() * 4000); // Ajusta según el tamaño del contenedor
    //       newSquares.push({ x, y });
    //     }
    //   }
    //   setSquares(newSquares as never[]);
    // };

    // generateRandomSquares(200); // Genera 10 cuadrados aleatorios

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
    <div className="min-h-screen bg-[#f2f4f5] text-white">
      <div className="">
      {/* {squares.map((square: Square, index) => (
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
          ))} */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.7}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(5000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[450%] skew-y-12 text-[#b89595]",
          )}
        />
        <div className="relative z-10 p-8">
          <Header />
          <Services />
          <Features />
          <Analytics />
          <Steps />
          <FAQ />
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

export default Home;