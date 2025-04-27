import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Home />
      <About />
      <Services />
      <Resources />
      <Contact />
      <Dashboard />
    </div>
  );
}
