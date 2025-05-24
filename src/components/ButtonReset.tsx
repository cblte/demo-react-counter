// This file is part of the demo-react-counter project
// Button compentent

function Button({ reset }: { reset: () => void }) {
  return (
    <button
      className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 w-full flex justify-center items-center border-2 border-purple-300"
      onClick={() => {
        reset();
      }}>
      Reset
    </button>
  );
}

export default Button;
