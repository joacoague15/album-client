import './App.css';
import { Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Album from './components/Album/Index';
import Packages from './components/Packages/Index';
import Inventory from './components/Inventory/Index'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Album/>} />
        <Route path='/packages' element={<Packages/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
      </Routes>
    </>
  );
}

export default App;
