import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const Menus = [
    {
      title: "1. Consideraciones iniciales",
      src: "Consideraciones",
    },
    {
      title: "2. Gramática y léxico",
      src: "Gramatica",
      submenu: {
        topic1: { title: "Alfabeto cirílico ruso" },
        topic2: { title: "Género de las palabras" },
        topic3: { title: "Número de los sustantivos" },
        topic4: { title: "La palabra rusa" },
        topic5: { title: "Casos gramaticales (información general)" },
        topic6: { title: "Pronombres" },
        topic7: { title: "Adjetivos" },
        topic8: { title: "Preposiciones" },
        topic9: { title: "Palabras interrogativas" },
        topic10: { title: "Casos gramaticales" },
        topic11: { title: "Verbos" },
        topic12: { title: "Prefijos y sufijos" },
        topic13: { title: "Adverbios" },
        topic14: { title: "Conjunciones" },
        topic15: { title: "Partículas" },
      },
    },
    {
      title: "3. Cultura y contexto lingüístico",
      src: "Cultura",
      submenu: {
        topic1: { title: "Expresiones" },
        topic2: { title: "Nombres, apellidos y patronímicos" },
        topic3: { title: "El clima" },
        topic4: { title: "El tiempo" },
        topic5: { title: "Festividades en Rusia" },
      },
    },
    {
      title: "4. Vocabulario",
      src: "Vocabulario",
      submenu: {
        topic1: { title: "Los colores" },
        topic2: { title: "Los números" },
      },
    },
  ];

  const handleSidebarToggle = () => {
    setOpen(!open);
    setSearchQuery(""); // Vaciar el input cada vez que el sidebar se despliega
  };

  return (
    <div className="fixed flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-auto p-5 pt-8 relative duration-300 rounded-lg`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={handleSidebarToggle} // Usar la función para alternar el sidebar
        />
        <div className="flex gap-x-4 items-center mb-4">
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

        <hr className="my-1 border-sky-800 border" />

        <div
          className={`flex rounded-md p-2 font-BookerlyBold cursor-pointer hover:bg-light-white text-gray-300 text-xs items-center gap-x-4`}
        >
          <img
            src={`./src/assets/Buscar.png`}
            className="hover:scale-125 transition-all"
          />
          <input
            type="text"
            placeholder="Buscar . . . ."
            value={searchQuery} // Controlar el valor del input con el estado
            onChange={(e) => setSearchQuery(e.target.value)} // Actualizar el estado al cambiar el input
            className={`py-2 pl-4 rounded-xl border-2 text-black border-blue-300 focus:bg-slate-100 focus:outline-sky-500 transition-width duration-300 ${
              open ? "w-full" : "w-0 opacity-0"
            }`}
          />
        </div>

        <hr className="my-1 border-sky-800 border" />

        <ul>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className="group flex rounded-md p-2 font-BookerlyBold cursor-pointer text-gray-300 text-xs items-center gap-x-4 mt-6 hover:bg-light-white"
            >
              <img
                src={`./src/assets/${Menu.src}.png`}
                className="hover:scale-125 transition-all"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              {open && Menu.submenu && (
                <img
                  src="./src/assets/submenu.png"
                  className="w-7 ml-auto hover:scale-125 transition-all hover:bg-slate-500 rounded-full"
                />
              )}
              {!open && (
                <div className="absolute left-20 bg-sky-50 text-indigo-300 text-center p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-fit border border-blue-800 ml-1">
                  {Menu.title.substring(3)}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
