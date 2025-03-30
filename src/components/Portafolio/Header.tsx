import { Link } from 'react-router-dom';
import logo from '../../img/logo13.svg';
import { ArrowLeft } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Header() {
    const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
      setRedirect(true);
  };

  if (redirect) {
      return <Navigate to="/" />;
  }

  return (
    <header className="text-center">
      <div className="flex justify-center py-8">
        <img src={logo} alt="Logo BAI automation" width={305} className="animate-pulse"/>
      </div>
      <div className="static-button">
        <button id='volver-botton' onClick={handleRedirect} className='bg-[#b89595] text-gray-100  px-6 py-3 rounded-lg hover:bg-[#4b1515] transition shadow-lg shadow-[#d4a5a5]/100'>Volver</button>
      </div>
    </header>
  );
}
