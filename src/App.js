import './App.css';
import { Routes, Route} from "react-router-dom";

import Bar from './components/Bar';
import Album from './components/Album';
import Packages from './components/Packages';


function App() {
  return (
    <>
      <Bar />
      <Routes>
        <Route path='/' element={<Album/>} />
        <Route path='/packages' element={<Packages/>}/>
      </Routes>
    </>
  );
}

export default App;
