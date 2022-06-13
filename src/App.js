import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Music from "./Pages/Music/Music";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
          <div className='pageContent'>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/contact" component={Contact} />
          </div>
      </div>

    </Router>
  );
}

export default App;
