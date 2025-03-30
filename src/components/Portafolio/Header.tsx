import { Link } from 'react-router-dom';
import logo from '../../img/logo13.svg';
import { ArrowLeft } from 'lucide-react';
export default function Header() {
  return (
    <header className="text-center">
      <div className="flex justify-center py-8">
        <img src={logo} alt="Logo BAI automation" width={305} className="animate-pulse"/>
      </div>
      <Link to="/" className="text-black hover:text-[#b89595] flex items-center mb-4 mt-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
      </Link>
    </header>
  );
}
