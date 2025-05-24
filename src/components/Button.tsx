// This file is part of the demo-react-counter project
// Button compentent

function Button({
  step,
  increment,
  disabled = false,
}: {
  step: number;
  increment: (step: number) => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-200 hover:scale-105 w-full flex justify-center items-center border-2 border-purple-300 ${
        disabled ? 'opacity-50 cursor-not-allowed hover:bg-purple-500 hover:scale-100' : ''
      }`}
      onClick={() => {
        if (!disabled) increment(step);
      }}
      disabled={disabled}>
      {step}
    </button>
  );
}

export default Button;
