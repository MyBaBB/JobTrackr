import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/About";
import Footer from "./components/layout/Footer";

import "./index.css";

function App() {
 const { t, i18n } = useTranslation;
 return (
  <div className="overflow-x-hidden min-h-dvh dark:bg-darkblue">
   <Router>
    <Navbar />
    <Routes>
     <Route path="/about" element={<About />} />
     <Route exact path="/" element={<JobApp />} />
    </Routes>
   </Router>
   <Footer />
  </div>
 );
};

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}