interface BottonProps {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const Botton = ({ text, onClick }: BottonProps) => {
  return (
    <button onClick={onClick} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/25 active:scale-95 transition-all">    {text}</button>
  );
}       