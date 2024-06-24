import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import {Skills} from './components/Skills'
import {Contact} from './components/Contact'
import { Footer } from './components/Footer';

function App() {
  const Home = () => {
    return (
      <div>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    );
  }
  return (
    <>
    <Navbar />
    <Hero />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}


export default App;