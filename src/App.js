import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Serv from './Serv';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import News from './News';
import Home from './Home';

function App() {
  return (
          <>     
    
    
      
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/serv" element={<Serv/>}/>
        </Routes>
        </BrowserRouter>
       
      </>
      );
}

      export default App;
