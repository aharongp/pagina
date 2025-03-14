import Header from './components/Header';
import Services from './components/Services';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

function App() {
  document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0){
        section.classList.remove('opcity-0', 'translate-y-10')
        section.classList.add('opacity-100', 'translate-y-0')
      }
    })
  })
  return (
    <div className="min-h-screen bg-[#f2f4f5] text-white fondo-cuadriculado">
      <div className="relative z-10 p-8">
        <Header />
        <Services />
        <Features />
        <Analytics />
        <Steps />
        <FAQ />
        <CallToAction />
      </div>
    </div>
  );
}

export default App;