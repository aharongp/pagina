import logo from '../../img/logo13.svg';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


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
        <button id='volver-botton' onClick={handleRedirect} className='bg-[#586576] text-gray-100 rounded-lg hover:bg-[#453948] transition shadow-lg shadow-[#464b5b]/100'>Volver</button>
      </div>
    </header>
  );
}
