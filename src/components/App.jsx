import React from "react";
import { BrowserRouter  as Router, Routes,Route}  from "react-router-dom";
import Home from "./Home";
import AboutUs from "../components/AboutUs";

function App()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
    
  );
}

export default App;