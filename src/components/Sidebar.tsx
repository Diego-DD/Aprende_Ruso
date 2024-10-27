import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [showLogoTooltip, setShowLogoTooltip] = useState(false);

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
    <div className="h-full pb-2 fixed flex z-50">
      {/* Contenedor */}

      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-cover bg-center h-auto p-5 pt-6 relative duration-300 rounded-lg shadow-lg`}
        style={{
          backgroundImage: `url('/images/Sidebars/Sidebar1.jpg')`,
        }}
      >
        {/* Logotipo */}

        <div className="flex gap-x-4 items-center mb-4">
          {open ? (
            // Logotipo en versión extendida

            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
              onMouseEnter={() => setShowLogoTooltip(true)}
              onMouseLeave={() => setShowLogoTooltip(false)}
            />
          ) : (
            // Logotipo en versión reducida

            <img
              src="./src/assets/desplegar.png"
              className={`cursor-pointer duration-500 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
              onMouseEnter={() => setShowLogoTooltip(true)}
              onMouseLeave={() => setShowLogoTooltip(false)}
            />
          )}

          {/* Tooltip del logotipo */}

          {!open && showLogoTooltip && (
            <div className="absolute left-full ml-2 bg-gray-800 font-BookerlyBold text-white text-xs p-2 rounded shadow-lg text-nowrap">
              Desplegar menú
            </div>
          )}

          {open && showLogoTooltip && (
            <div className="absolute left-full ml-2 bg-white font-BookerlyBold text-gray-800 text-xs p-2 rounded shadow-lg text-nowrap">
              Retraer menú
            </div>
          )}

          {/* Título del sidebar */}

          <h1
            className={`text-white origin-left font-BookerlyBoldItalic text-lg duration-200 ${
              !open && "scale-0"
            }`}
          >
            TEMARIO:
          </h1>
        </div>

        {/* División #1 */}

        <hr className="my-1 border-sky-800 border" />

        {/* Buscador */}

        <div
          className={`flex rounded-md py-2 font-BookerlyBold cursor-pointer ${
            !open && `hover:bg-light-white`
          }  text-gray-300 text-xs items-center gap-x-4`}
          onClick={() => handleSidebarToggle(false)}
          onMouseEnter={() => setShowSearchTooltip(true)}
          onMouseLeave={() => setShowSearchTooltip(false)}
        >
          {/* Icono de búsqueda */}

          <img
            src={`./src/assets/Buscar.png`}
            className="absolute pl-2 z-10 hover:scale-125 transition-all"
          />

          {/* Input de búsqueda */}

          <input
            type="text"
            placeholder="Buscar . . . ."
            value={searchQuery} // Controlar el valor del input con el estado
            onChange={(e) => setSearchQuery(e.target.value)} // Actualizar el estado al cambiar el input
            className={`py-2 pl-10 pr-2 rounded-xl border-2 text-black border-blue-300 focus:bg-slate-100 focus:outline-sky-500 transition-width duration-300 ${
              open ? "w-full" : "w-0 opacity-0"
            }`}
          />

          {/* Tooltip del campo de búsqueda */}

          {!open && showSearchTooltip && (
            <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs p-2 rounded shadow-lg text-nowrap">
              Buscar contenido
            </div>
          )}
        </div>

        {/* División #2 */}

        <hr className="my-1 border-sky-800 border" />

        {/* Menú */}

        <ul>
          {Menus.map((Menu, index) => (
            // Contenido general de los elementos del menú

            <li
              key={index}
              className="group flex rounded-md p-2 font-BookerlyBold cursor-pointer text-white text-xs items-center gap-x-4 mt-6 hover:bg-light-white"
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
              onClick={() => handleSidebarToggle(false)}
            >
              {/* Iconos del menú */}

              <img
                src={`./src/assets/${Menu.src}.png`}
                className="hover:scale-125 transition-all"
              />

              {/* Títulos del menú */}

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>

              {/* Íconos de submenú */}

              {open && Menu.submenu && (
                <img
                  src="./src/assets/submenu.png"
                  className="w-7 ml-auto hover:scale-125 transition-all hover:bg-slate-500 rounded-full"
                />
              )}

              {/* Tooltips */}

              {!open && hoveredMenu === index && (
                <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs p-2 rounded shadow-lg text-nowrap">
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
