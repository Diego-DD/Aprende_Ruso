import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const Menus = [
    {
      title: "Consideraciones iniciales",
      src: "Consideraciones",
    },
    {
      title: "Gramática y léxico",
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
      title: "Cultura y contexto lingüístico",
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
      title: "Vocabulario",
      src: "Vocabulario",
      submenu: {
        topic1: { title: "Los colores" },
        topic2: { title: "Los números" },
      },
    },
  ];

  const handleSidebarToggle = (master: boolean) => {
    if (!master) {
      setOpen(true);
    } else {
      setOpen(!open);
    }

    if (!open) {
      setSearchQuery(""); // Vaciar el input cada vez que el sidebar se despliega
    }
  };

  return (
    <div className="h-full pb-2.5 fixed flex z-50">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-auto p-5 pt-6 relative duration-300 rounded-lg`}
      >
        <div className="flex gap-x-4 items-center mb-4">
          {open ? (
            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
            />
          ) : (
            <img
              src="./src/assets/desplegar.png"
              className={`cursor-pointer duration-500 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
            />
          )}
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
          className={`flex rounded-md py-2 font-BookerlyBold cursor-pointer ${
            !open && `hover:bg-light-white`
          }  text-gray-300 text-xs items-center gap-x-4`}
          onClick={() => handleSidebarToggle(false)}
        >
          <img
            src={`./src/assets/Buscar.png`}
            className="absolute pl-2 z-10 hover:scale-125 transition-all"
          />
          <input
            type="text"
            placeholder="Buscar . . . ."
            value={searchQuery} // Controlar el valor del input con el estado
            onChange={(e) => setSearchQuery(e.target.value)} // Actualizar el estado al cambiar el input
            className={`py-2 pl-10 pr-2 rounded-xl border-2 text-black border-blue-300 focus:bg-slate-100 focus:outline-sky-500 transition-width duration-300 ${
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
              onClick={() => handleSidebarToggle(false)}
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
                <div className="absolute left-20 bg-sky-50 text-indigo-300 text-center p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-fit border border-blue-800 ml-1 text-nowrap">
                  {Menu.title}
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
