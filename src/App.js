import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import MakePayments from "./pages/MakePayments";
import RateAndFee from "./pages/RateAndFee";



export default function App(){
  return (
    <Router>
        {/* Navbar - fixed top */}
      <Navbar />
    <div className="font-sans">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-payments" element={<MakePayments />} />
        <Route path="loans" element={<RateAndFee />}/>
       </Routes>
            {/* Hero Section */}
             </div>
      
        {/* Footer - fixed bottom or just persistent */}
      <Footer />
        </Router>
       
  )
}


