import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
//import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import HomeDeutsch from './components/Home/HomeDeutsch';
import HomeKorean from './components/Home/HomeKorean';
import Tips from './components/Tips/Tips'
import Admin from './components/Admin/Admin'
import Footer from './components/Footer/Footer'
import './App.css';

axios.defaults.baseURL = 'https://heli-ki-api.vercel.app/';

function App() {
  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
  pathname === '/'     ||
  pathname === '/home' ||
  pathname === '/home/de' ||
  pathname === '/home/ko' ||
  pathname === '/tips' ||
  pathname === '/admin';

  return (
    <div className="App">
        
        {boolAddComponent && <Navbar />}

        <Routes>
          <Route path={'/'} element={<Landing/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/home/de'} element={<HomeDeutsch/>}/>
          <Route path={'/home/ko'} element={<HomeKorean/>}/>
          <Route path={'/tips'} element={<Tips/>}/>
          <Route path={'/admin'} element={<Admin/>}/>
        </Routes>  

        {boolAddComponent && <Footer />}   
    </div>
  );
}

export default App;
