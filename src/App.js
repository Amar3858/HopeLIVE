import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Contact from './Components/Contact/contact';
import About from './Components/About/about';
import Home from './Pages/Home/home';
import "./App.css" 

function App() {
  return (
    <>
    <Router>  
      <Home/>
    </Router>
    </>
  );
}

export default App;
