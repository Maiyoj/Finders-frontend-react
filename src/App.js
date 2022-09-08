import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Game from './components/Game';
import Games from './components/Games';
import Profile from './components/Profile';

function App() {
  return (
  <div>
    <Navbar />

    <Routes>
      <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/games" element={<Games />} />
      <Route exact path="/games/:gameID" element={<Game />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
    </div>
  );
}

export default App;
