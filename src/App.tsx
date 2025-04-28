import Portafolio from './components/Portafolio/Portafolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Landing/Home';
import ChatbotTextoDetail from './components/Portafolio/chatbots/texto/textoDetails';
import ChatbotVozDetail from './components/Portafolio/chatbots/voz/vozDetails';
import ScriptTexto from './components/Portafolio/chatbots/texto/script';
import Libro from './components/Campañas/10claves/Libro';



function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/10-claves" element={<Libro />} />
            <Route path="/texto/:id" element={<ChatbotTextoDetail />} />
            <Route path="/voz/:id" element={<ChatbotVozDetail />} />
        </Routes>
        <ScriptTexto/>
      </div>
</Router>
  );
}

export default App;