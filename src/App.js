import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
          <div className='pageContent'>
            <Route exact path="/" component={Home} />

          </div>
      </div>

    </Router>
  );
}

export default App;
