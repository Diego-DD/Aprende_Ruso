import { cn } from "../lib/utils";

interface CeldaProps {
  texto?: string;
  className?: string;
}
//Responsive text-base smtext-lg mdtext-xl lgtext-2xl xltext-3xl
function Celda({ texto = "", className }: CeldaProps) {
  return (
    <div
      className={cn(
        "w-full h-full content-center text-center text-xs font-Bookerly bg-white border-solid border-x border-y border-t-white border-b-white border-r-white border-l-white",
        className
      )}
    >
      <p className="px-1"></p>
      {texto}
    </div>
  );
}

export default Celda;
