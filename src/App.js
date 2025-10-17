import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";



export default function App(){
  return (
    <Router>
        {/* Navbar - fixed top */}
      <Navbar />
    <div className="font-sans">
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
            {/* Hero Section */}
             </div>
      
        {/* Footer - fixed bottom or just persistent */}
      <Footer />
        </Router>
       
  )
}


