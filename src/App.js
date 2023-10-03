import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCat from './pages/NewCat';
import './components/ComponentesGlobales/global.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='NewVideo' element={<NewVideo/>} />
        <Route path='NewCat' element={<NewCat/>} />
      </Routes>
    </>
  );
}
export default App;
