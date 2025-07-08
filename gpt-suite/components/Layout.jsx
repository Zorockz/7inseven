import { Sparkles } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-lg flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-400 p-3 rounded-full mb-2">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Real Talk Advice</h1>
          <div className="text-gray-500 text-lg font-semibold">7in seven</div>
          <div className="flex flex-col items-center mt-2">
            <span className="font-bold text-gray-700">Zorephona</span>
            <span className="text-sm text-gray-500">student</span>
          </div>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Other Projects</h2>
          <ul className="space-y-4">
            {[1,2,3].map((i) => (
              <li key={i} className="flex flex-col items-center bg-gray-100 rounded-xl py-4">
                <span className="text-lg font-semibold text-gray-700 mb-1">Coming soon</span>
                <span className="text-xs text-red-400 mb-1">inactive</span>
                <span className="font-bold text-gray-700">Zorephona</span>
                <span className="text-sm text-gray-500">student</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
