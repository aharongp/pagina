import logo from '../../img/logo13.svg';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { RainbowButton } from '../magicui/rainbow-button';


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
        <RainbowButton onClick={handleRedirect} className="static-botton">Volver</RainbowButton>    
      </div>
    </header>
  );
}
