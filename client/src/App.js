import './App.css';
import {Route, Routes} from 'react-router-dom';
import Tablero from './components/Tablero/Tablero.jsx';
import Home from './components/Home/Home';
import Stadistics from './components/Statistics/Stadistics';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stadistics" element={<Stadistics />} />
      </Routes>
    </div>
  );
}

export default App;
