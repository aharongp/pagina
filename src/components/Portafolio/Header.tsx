import logo from '../../img/logo13.svg';
export default function Header() {
  return (
    <header className="text-center">
      <div className="flex justify-center py-8">
        <img src={logo} alt="Logo BAI automation" width={305} className="animate-pulse"/>
      </div>
      <a href="https://cal.com/baiautomation/60-min-meeting">
      <button className="bg-[#b89595] text-gray-100 mt-5 px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100">
        Agendar consultoría <span className="font-bold">GRATIS</span>
      </button>
        </a>
    </header>
  );
}
