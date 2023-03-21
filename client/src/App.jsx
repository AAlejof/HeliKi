import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import heliki from './assets/heliki.gif';
import './App.css';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className="App">
        <img src={heliki} className="App-logo" alt="logo" />     
    </div>
  );
}

export default App;
