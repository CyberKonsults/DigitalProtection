import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CyberkonsultsLogo from '../assets/cyberkonsults_logo.png'; // Save logo locally in assets

export default function CertificateGenerator() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('Beginner');
  const certificateRef = useRef();

  const handleDownload = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'px', [canvas.width, canvas.height]);
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${name}_Cyberkonsults_Certificate.pdf`);
  };

  const today = new Date().toLocaleDateString();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🎓 Certificate Generator</h2>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <button
          onClick={handleDownload}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Download Certificate
        </button>
      </div>

      <div
        ref={certificateRef}
        className="border-4 border-blue-700 p-8 text-center bg-white shadow-lg rounded-xl"
        style={{ width: '800px', margin: '0 auto' }}
      >
        <img src={CyberkonsultsLogo} alt="Cyberkonsults" className="h-20 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Certificate of Completion</h1>
        <p className="text-xl mb-2">This is proudly awarded to</p>
        <p className="text-2xl font-bold mb-2">{name || 'Your Name'}</p>
        <p className="text-lg mb-2">for successful completion of the</p>
        <p className="text-xl font-semibold mb-2">{course} Course</p>
        <p className="text-sm mb-4">{today}</p>
        <p className="text-sm italic">Empowering Families in a Digital World</p>
      </div>
    </div>
  );
}
