import { useEffect, useState } from "react";
import { Square, useWindowSize } from "../Landing/Home";
import Header from "./Header";
import Texto from "./chatbots/texto/texto";
import Voz from "./chatbots/voz/voz";
import { Meteors } from "../magicui/meteors";
import { Globe } from "../magicui/globe";

export default function Portafolio(){
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
  return (
    <div className="min-h-screen bg-[#f2f4f5] text-white ">
      <Globe className="top-80" />
      <div className="">
        <div className="relative z-10 p-8">
            <Meteors number={40} maxDuration={15}/>
            <Header />
            <Texto />
            <Voz />
        </div>
      </div>
    </div>
  );
}





