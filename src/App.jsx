import Heading from './components/Heading';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Heading />
      <main className="max-w-7xl mx-auto w-full px-8 py-10 box-border">
        <AboutMe /> 
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;