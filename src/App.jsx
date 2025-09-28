import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-class">
      <Heading />
      <main className="main-container">
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
