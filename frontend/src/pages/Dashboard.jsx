function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-slate-100">

      {/* Header */}
      <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">AI Job Tracker</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h2 className="text-4xl font-bold text-indigo-600">0</h2>
            <p className="text-slate-500 mt-1 text-sm">Total Applications</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h2 className="text-4xl font-bold text-green-500">0</h2>
            <p className="text-slate-500 mt-1 text-sm">Interviews</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-500">0</h2>
            <p className="text-slate-500 mt-1 text-sm">Offers</p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
          <p className="text-slate-500 text-lg">No applications yet.</p>
          <p className="text-slate-500 text-sm mt-1">Start tracking your job applications!</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;