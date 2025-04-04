import { useEffect } from "react";
import Header from "./Header";
import Texto from "./chatbots/texto/texto";
import Voz from "./chatbots/voz/voz";
import { Meteors } from "../magicui/meteors";
import { useWindowSize } from "../Landing/Home";

export default function Portafolio(){
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
  if(width <600){
    return(
      <div className="min-h-screen bg-[#f2f4f5] text-white flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center">
          <Header />
          <div className="flex flex-col items-center">
            <Texto/>
            <Voz />
          </div>
      </div>
    </div>
    );
  }

  return (
<div className="min-h-screen bg-[#f2f4f5] text-white flex items-center justify-center">
  <div className="relative z-10 p-8 flex flex-col items-center">
    <Meteors number={40} maxDuration={15} />
    <Header />
    <div className="flex flex-col items-center">
      <Texto/>
      <Voz />
    </div>
  </div>
</div>
  );
}





