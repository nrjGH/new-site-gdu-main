import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Awards from './components/awards and achievements/awards';
import Council from './components/council members info + clubs branches/council';
import Games from './components/games/games';
import Info from './components/info/info';
import Photo from './components/photo gallery/photo';
import Registration from './components/registration/registration';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/council' element={<Council />} />
        <Route path='/games' element={<Games />} />
        <Route path='/info' element={<Info />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
