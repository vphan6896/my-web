import './App.css';
import Routing from './Routing/Routing'
import Navbar from './Navigation/Navbar'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
