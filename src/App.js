import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import Home from "./Pages/Home/Home"

function App() {
  return (
    <Router>
      
      <div className="App">
          <Route exact path="/" component={Home} />
      </div>

    </Router>
  );
}

export default App;
