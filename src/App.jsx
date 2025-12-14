import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Heading />
      <main className="w-full px-4 py-10">
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;