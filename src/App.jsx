import './App.css';
import Home from './components/Home';
import About from './pages/About';
import Person from './Person';
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>React Router</h1>
    
        <nav >
          <ul className='flex'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Person" > UserName  </Link>
            </li>
            <li>
              <Link to="/About" > About PAge </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={ <Home />}>  </Route>
          <Route path='/Person' element={<Person />} > </Route>
          <Route path='/About' element={<About/>} > </Route>
          <Route path="*" element={ <Home />}>  </Route>
        </Routes>
      </div>
    </Router>     
  );
}

export default App;

  

