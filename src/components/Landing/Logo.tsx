import logo from '../../img/logo13.svg';

export default function Header() {
  return (
    <div className="text-center">
      <div className="flex justify-center margen-abajo py-8">
        <img src={logo} alt="Logo BAI automation" width={305} className="animate-pulse"/>
      </div>

    </div>
  );
}
