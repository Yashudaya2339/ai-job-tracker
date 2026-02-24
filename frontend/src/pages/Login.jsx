function Login() {
  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-10 flex flex-col gap-5">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">AI Job Tracker</h1>
          <p className="text-slate-400 text-sm mt-1">Track your applications smartly 🚀</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
          Login
        </button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-600 font-medium hover:underline">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;