import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            className="border p-2 w-full rounded" required />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            className="border p-2 w-full rounded" required />
        </div>
        <div>
          <label className="block mb-1">Message:</label>
          <textarea name="message" value={form.message} onChange={handleChange}
            className="border p-2 w-full rounded" rows="4" required />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
