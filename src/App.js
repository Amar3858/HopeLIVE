
import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Contact from './Components/Contact/contact';
import About from './Components/About/about';
import Home from './Pages/Home/home';
import { Router } from 'react-router-dom';

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/signup" element={<Signup />} />
        

        </Routes>

     </Router>
  );
}

export default App;
