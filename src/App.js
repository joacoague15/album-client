import './App.css';
import { Routes, Route} from "react-router-dom";

<<<<<<< HEAD
import NavBar from './components/Album/NavBar';
import Album from './components/Album/Index';
import Packages from './components/Packages/Index';
=======
import Navbar from './components/Navbar';
import Album from './components/Album';
import Packages from './components/Packages';
>>>>>>> master


function App() {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
=======
      <Navbar />
>>>>>>> master
      <Routes>
        <Route path='/' element={<Album/>} />
        <Route path='/packages' element={<Packages/>}/>
      </Routes>
    </>
  );
}

export default App;
