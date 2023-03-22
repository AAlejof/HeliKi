import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Tips from './components/Tips/Tips'
import Admin from './components/Admin/Admin'
import './App.css';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path={'/'} element={<Landing/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/tips'} element={<Tips/>}/>
          <Route path={'/admin'} element={<Admin/>}/>
        </Routes>     
    </div>
  );
}

export default App;
