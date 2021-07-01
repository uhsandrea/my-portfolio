import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Theme from './components/Theme';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';

function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Theme />
        <Hamburger />
    </div>
  );
}

export default App;
