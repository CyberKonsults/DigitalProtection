import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_27t76qw',    // <-- replace with your EmailJS service ID
      'template_4s3uxcr',   // <-- replace with your EmailJS template ID
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      },
      'w-T056W9gXNmZzkvu'     // <-- replace with your EmailJS public key
    ).then(() => {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }).catch(() => {
      setStatus('Failed to send message.');
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
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
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
      </form>

      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
