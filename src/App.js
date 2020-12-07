import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
