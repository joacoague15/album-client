import './App.css';
import { Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Album from './components/Album/Index';
import Packages from './components/Packages/Index';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Album/>} />
        <Route path='/packages' element={<Packages/>}/>
      </Routes>
    </>
  );
}

export default App;
