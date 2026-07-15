import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => (
  <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
    <Header />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
