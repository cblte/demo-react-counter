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
  };

  const saveResult = () => {
    setSavedResults([...savedResults, count]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">React Counter</h1>
        <p className="text-purple-200">Express yourself with numbers!</p>
      </header>
      <main className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-300/30">
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

        {savedResults.length > 0 && (
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-purple-300/20">
            <h2 className="text-xl font-semibold text-purple-100 mb-3">Saved Results</h2>
            <div className="max-h-40 overflow-y-auto">
              <ul className="space-y-2">
                {savedResults
                  .sort((a, b) => b - a)
                  .map((result, index) => (
                    <li key={index} className="text-white/90 flex items-center">
                      <span className="mr-2 text-purple-300">{savedResults.length - index}:</span> {result}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
