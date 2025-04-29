import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: "Cyberkonsults Digital Protection Online Global Launch!",
      date: "2025-04-30",
      summary: "We're live across the world. Empowering families online!",
      link: "#",
    },
    {
      title: "5 Tips to Keep Your Kids Safe Online",
      date: "2025-05-15",
      summary: "Essential cybersecurity practices for parents and young adults.",
      link: "#",
    },
    {
      title: "Upcoming Webinar: Digital Parenting 101",
      date: "2025-05-28",
      summary: "Join us for an exclusive live training session!",
      link: "#",
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📢 Blog & Events</h1>
      <div className="space-y-8">
        {posts.map((post, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <p className="mb-2">{post.summary}</p>
            <a href={post.link} className="text-blue-600 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
