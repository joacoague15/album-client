import './App.css';
import { Routes, Route} from "react-router-dom";

import NavBar from './components/Album/NavBar';
import Album from './components/Album/Index';
import Packages from './components/Packages/Index';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Album/>} />
        <Route path='/packages' element={<Packages/>}/>
      </Routes>
    </>
  );
}

export default App;
