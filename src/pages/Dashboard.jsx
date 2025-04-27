export default function Dashboard() {
    return (
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-blue-700 text-center">🎓 Digital Safety Dashboard</h2>
        <p className="text-center text-sm text-gray-600 mt-2">Track your quiz progress and unlock badges!</p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {['Beginner', 'Intermediate', 'Expert'].map((level) => (
            <div key={level} className="p-4 bg-white border rounded shadow text-center">
              <h3 className="text-blue-600 font-semibold">{level} Quiz</h3>
              <button className="mt-2 w-full bg-blue-700 text-white px-4 py-2 rounded">Take Quiz</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  