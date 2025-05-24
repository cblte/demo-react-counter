import { useState } from 'react';
import Button from './components/Button';
import ButtonReset from './components/ButtonReset';

function App() {
  const [count, setCount] = useState(0);

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">React Counter</h1>
        <p className="text-purple-200">Express yourself with numbers!</p>
      </header>
      <main className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-300/30">
        <p className="text-6xl font-bold text-center mb-6 text-white">{count}</p>

        <div className="flex justify-center mb-8">
          <ButtonReset reset={reset} />
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
    </div>
  );
}

export default App;
