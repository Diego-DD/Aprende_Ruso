import clsx from "clsx";

interface CeldaProps {
  texto?: string;
  className?: string;
}
//Responsive text-base smtext-lg mdtext-xl lgtext-2xl xltext-3xl
function Celda({ texto = "Celda", className }: CeldaProps) {
  return (
    <div
      className={clsx(
        "w-full h-full content-center text-center text-base font-Bookerly bg-yellow-600 border-solid border-x border-y border-t-white border-b-white border-r-white border-l-white",
        className
      )}
    >
      <p className="px-1"></p>
      {texto}
    </div>
  );
}

export default Celda;
