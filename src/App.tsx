import { useState } from 'react';
import Button from './components/Button';
import ButtonReset from './components/ButtonReset';

function App() {
  const [count, setCount] = useState(0);
  const [savedResults, setSavedResults] = useState<number[]>([]);

  const increment = (step: number) => {
    const newCount = count + step;
    if (newCount < 0) {
      return;
    }
    setCount(newCount);
  };

  const reset = () => {
    setCount(0);
    setSavedResults([]);
  };

  const saveResult = () => {
    setSavedResults([...savedResults, count]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 p-4 max-h-[200px]">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">React Counter</h1>
        <p className="text-purple-200">Express yourself with numbers!</p>
      </header>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 h-[500px]">
        <main className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full md:w-7/12 border border-purple-300/30">
          <p className="text-6xl font-bold text-center mb-6 text-white">{count}</p>

          <div className="flex justify-center gap-4 mb-8">
            <ButtonReset reset={reset} />
            <button
              onClick={saveResult}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors">
              Save Result
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-center text-purple-200 font-medium">Increment</p>
            <div className="flex justify-between gap-4 mb-6">
              <Button step={1} increment={increment} />
              <Button step={10} increment={increment} />
              <Button step={100} increment={increment} />
            </div>
            <p className="text-center text-purple-200 font-medium">Decrement</p>
            <div className="flex justify-between gap-4">
              <Button step={-1} increment={increment} disabled={count < 1} />
              <Button step={-10} increment={increment} disabled={count < 10} />
              <Button step={-100} increment={increment} disabled={count < 100} />
            </div>
          </div>
        </main>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full md:w-5/12 border border-purple-300/30 flex flex-col">
          <h2 className="text-xl font-semibold text-purple-100 mb-3">Saved Results</h2>

          {savedResults.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-purple-200 italic">No results saved yet</p>
            </div>
          ) : (
            <div
              className="flex-1 overflow-y-auto pr-2"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(168, 85, 247, 0.6) rgba(88, 28, 135, 0.1)',
              }}>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-300/20">
                    <th className="text-left pb-2 pl-2 text-purple-300 font-medium">#</th>
                    <th className="text-left pb-2 pl-4 text-purple-300 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {savedResults
                    .sort((a, b) => b - a)
                    .map((result, index) => (
                      <tr
                        key={index}
                        className="border-b border-purple-300/10 hover:bg-purple-500/10 transition-colors">
                        <td className="py-2 pl-2 text-purple-300 text-right w-10">{savedResults.length - index}.</td>
                        <td className="py-2 pl-4 text-white/90 font-medium">{result}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
