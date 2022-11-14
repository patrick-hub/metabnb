
import './App.css';
import Home from './Pages/Home';
import {Route, Routes, HashRouter} from 'react-router-dom'
import Places from './Pages/Places';


function App() {
   
  return (
      <div className="App">
        <HashRouter   Basename='/'>
        <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path= '/Pages/Places' element={<Places />}></Route>
      <Route path= '/Pages/Home' element={<Home />}></Route>
    </Routes>
        </HashRouter>
     
    </div>
    
  );
}

export default App;

