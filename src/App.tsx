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
    <a href="#main-content" className="sr-only fixed left-4 top-3 z-[60] rounded-md bg-white px-4 py-3 font-semibold text-blue-700 focus:not-sr-only">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
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
