import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1';
import Login1 from './pages/Login1';
import Signup1 from './pages/Signup1';
import AboutUs from './pages/aboutus';
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/login" element={<Login1 />} />
                <Route path="/signup" element={<Signup1 />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
