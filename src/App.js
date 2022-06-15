import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Music from "./Pages/Music/Music";
import Contact from "./Pages/Contact/Contact";

import Footer  from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
          <div id='pageContent'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
