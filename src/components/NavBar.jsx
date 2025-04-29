import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">Cyberkonsults</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/admin" className="hover:underline">Dashboard</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
      </div>
    </nav>
  );
}
