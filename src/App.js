import './App.scss';
import { Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav></Nav>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        
      </HashRouter>
    </div>
  );
}

export default App;
