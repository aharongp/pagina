
export default function Video() {
  return (
    <div className="text-center">
      <div className="aspect-video max-w-3xl mx-auto bg-black rounded-2xl mb-8">
      <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/AwcXf55si_Y?si=HUUHceDlB0-aGx4A" title="video de introduccion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <a href="https://cal.com/baiautomation/60-min-meeting">
      <button className="bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
        Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
        </a>
    </div>
  );
}
