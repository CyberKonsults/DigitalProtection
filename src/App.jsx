import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import BadgeDashboard from './components/BadgeDashboard';
import QuizLauncher from './components/QuizLauncher';
import AdminDashboard from './components/AdminDashboard';
import CertificateGenerator from './components/CertificateGenerator';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<><QuizLauncher /><BadgeDashboard /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/certificate" element={<CertificateGenerator />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
