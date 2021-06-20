import './App.scss';
import { Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Mode from './components/Mode';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
        <Mode />
      </HashRouter>
    </div>
  );
}

export default App;
