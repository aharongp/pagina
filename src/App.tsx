import Portafolio from './components/Portafolio/Portafolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Landing/Home';
import ChatbotTextoDetail from './components/Portafolio/chatbots/texto/textoDetails';
import ChatbotVozDetail from './components/Portafolio/chatbots/voz/vozDetails';



function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/texto/:id" element={<ChatbotTextoDetail />} />
        <Route path="/voz/:id" element={<ChatbotVozDetail />} />
    </Routes>
</Router>
  );
}

export default App;