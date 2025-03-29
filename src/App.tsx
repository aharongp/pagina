import Portafolio from './components/Portafolio/Portafolio';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Landing/Home';
import ChatbotTextoDetail from './components/Portafolio/chatbots/texto/textoDetails';
import ChatbotVozDetail from './components/Portafolio/chatbots/voz/vozDetails';
import ScriptTexto from './components/Portafolio/chatbots/texto/script';



function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/texto/:id" element={<ChatbotTextoDetail />} />
            <Route path="/voz/:id" element={<ChatbotVozDetail />} />
        </Routes>
        <ScriptTexto/>
      </div>
</Router>
  );
}

export default App;