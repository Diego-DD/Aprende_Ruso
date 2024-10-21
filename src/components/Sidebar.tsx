import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Buscar . . . .", src: "Buscar" },
    { title: "1. Consideraciones iniciales", src: "Consideraciones" },
    { title: "2. Gramática y léxico", src: "Gramatica" },
    { title: "3. Cultura y contexto lingüístico", src: "Cultura" },
    { title: "4. Vocabulario", src: "Vocabulario" },
  ];

  return (
    <div className="flex pr-1 pt-1">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-auto p-5 pt-8 relative duration-300 rounded-lg`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-BookerlyBoldItalic text-lg duration-200 ${
              !open && "scale-0"
            }`}
          >
            TEMARIO:
          </h1>
        </div>
        <ul className="pt-4">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 font-BookerlyBold cursor-pointer hover:bg-light-white text-gray-300 text-xs items-center gap-x-4 mt-2
                `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
