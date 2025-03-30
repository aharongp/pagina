import logo from '../../img/logo13.svg';
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="text-center">
      <div className="flex justify-left margen-abajo py-8" id='logo'>
        <img src={logo} alt="Logo BAI automation" width={325} className="animate-pulse"/>
      </div>
    </header>
  );
}
