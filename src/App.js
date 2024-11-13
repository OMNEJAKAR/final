import React from "react";
import { BrowserRouter  as Router, Routes,Route}  from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";
function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>
    
  );
}

export default App;