import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";

import Signup from "./Components/Signup/signup";
import About from "./Components/About/about";
import Home from "./Pages/Home/home";
import ContactUs from "./Pages/ContactUs/contactus";
import AboutUs from "./Pages/AboutUs/aboutus"
import Loginus from "./Pages/Loginus/loginus"
import Signus from "./Pages/SignUs/signus"
import ForgotUs from "./Pages/ForgotUs/forgotus"
import DashBoard from "./Pages/DashBoardPage/dashboardpage"
import StartCamp from "./Pages/StartCampaignPage/startcampaignpage"

import "./App.css";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Loginus />} />
          <Route path="/signup" element={<Signus />} />
          <Route path="/forgot-password" element={<ForgotUs />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/start-campaign" element={<StartCamp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
