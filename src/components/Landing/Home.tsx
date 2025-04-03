import { Navigate } from 'react-router-dom';
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
import { Globe } from '../magicui/globe';
import { Meteors } from '../magicui/meteors';
import Logo from './Logo';
import Video from './Video';
import { PulsatingButton } from '../magicui/pulsating-button';
import { RainbowButton } from '../magicui/rainbow-button';

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
  const { width } = useWindowSize();
  
  useEffect(() => {
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

  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
      setRedirect(true);
  };

  if (redirect) {
      return <Navigate to="/Portafolio" />;
  }

  if (width < 600){
    return(
    <div className="min-h-screen bg-[#f2f4f5] text-white flex">
      <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.7}
          duration={3}
          repeatDelay={1}
          className={cn(
              "[mask-image:radial-gradient(5000px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[450%] skew-y-12 text-[#708090]",
          )}
      />
      <Globe className='top-40'/>
      <div className="flex-grow">
          <div className="relative z-10 p-8">
              <Logo />
              <Header/>
              <Video />
              <Services />
              <Features />
              <Analytics />
              <Steps />
              <FAQ />
              <CallToAction />
          </div>
      </div>
      <div className="static-botton">
        <RainbowButton onClick={handleRedirect} className="static-botton">Probar Soluciones</RainbowButton>    
      </div>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2f4f5] text-white flex">
        <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.7}
            duration={3}
            repeatDelay={1}
            className={cn(
                "[mask-image:radial-gradient(5000px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[450%] skew-y-12 text-[#708090]",
            )}
        />
        <Globe className='mt-20'/>
        <Meteors number={40} maxDuration={15} className='mt-10'/>
        <div className="flex-grow">
            <div className="relative z-10 p-8">
                <Logo />
                <Header/>
                <Video />
                <Services />
                <Features />
                <Analytics />
                <Steps />
                <FAQ />
                <CallToAction />
            </div>
        </div>
        <RainbowButton onClick={handleRedirect} className="static-botton">Probar Soluciones</RainbowButton>    
    </div>
);
}

export default Home;