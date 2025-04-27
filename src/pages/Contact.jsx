export default function Contact() {
    return (
      <section className="p-6 bg-blue-100">
        <h2 className="text-2xl font-semibold text-blue-700">Contact Us</h2>
        <p className="mt-2 text-gray-700">Email: info@cyberkonsults.com</p>
        <p>Phone: [Insert Number]</p>
        <form className="mt-4 space-y-2 max-w-md">
          <input placeholder="Your Name" className="w-full p-2 border rounded" />
          <input placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-24" />
          <button className="bg-blue-700 text-white px-4 py-2 rounded" type="submit">Send</button>
        </form>
      </section>
    );
  }
  