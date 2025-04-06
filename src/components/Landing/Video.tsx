import { ShinyButton } from "../magicui/shiny-button";
export default function Video() {
  return (
    <div id="video" className="text-center">
      <div className="aspect-video max-w-3xl mx-auto bg-black rounded-2xl mb-8 p">
      <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/AwcXf55si_Y?si=HUUHceDlB0-aGx4A" title="Introduccion a BAI automation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <a href="https://cal.com/baiautomation/60-min-meeting">
      <button className="bg-[#d5aaaa] text-gray-100 px-6 py-3 rounded-lg border border-black hover:bg-[#af7676] transition shadow-lg shadow-[#d4a5a5]/100">
        <ShinyButton>
          Agendar consultoría <span className="font-bold">GRATIS</span>
        </ShinyButton>
      </button>
      </a>
    </div>
  );
}


