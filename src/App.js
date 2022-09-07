import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Reviews from './components/Reviews';

function App() {
  return (
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/reviews" element={<Reviews />} />
    </Routes>
    </div>
  );
}

export default App;
