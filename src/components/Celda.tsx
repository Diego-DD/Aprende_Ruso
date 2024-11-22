import { cn } from "../lib/utils";

interface CeldaProps {
  texto?: string;
  className?: string;
  texto_2?: string;
  mitad?: number;
}
//Responsive text-base smtext-lg mdtext-xl lgtext-2xl xltext-3xl
function Celda({ texto = "", className, texto_2 = "", mitad = 0 }: CeldaProps) {
  return (
    <div
      className={cn(
        "w-full h-full content-center text-center font-BookerlyBold bg-white border-solid border-x border-y border-t-white border-b-white border-r-white border-l-white",
        className,
      )}
    >
      {mitad === 0 && <p className="px-1">{texto}</p>}
      {mitad != 0 && (
        <p className="px-1">
          <span>{texto.substring(0, mitad)}</span>
          <span className="text-rojo_intenso">{texto.substring(mitad)}</span>
        </p>
      )}
      {texto_2 != "" && <p className="px-1 text-xs">{texto_2}</p>}
    </div>
  );
}

export default Celda;
