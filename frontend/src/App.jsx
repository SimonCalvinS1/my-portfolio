import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import OtherActivities from './components/OtherActivities';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Heading />
      <main className="w-full px-4 py-10">
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <OtherActivities />
      </main>
      <Footer />
    </div>
  );
}

export default App;