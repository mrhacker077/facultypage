import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Faculty from "./components/Faculty"; // Import Faculty Page
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
