import Homeee from './pages/homeee';
import './App.css';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import React from 'react';

function App() {
  return     (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homeee />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
      
    </Routes>    
    </BrowserRouter>
  )
}

export default App;
