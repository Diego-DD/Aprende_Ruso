import { useState, useEffect, useRef } from "react";
import useSound from "use-sound";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [showLogoTooltip, setShowLogoTooltip] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // Estado para controlar submenús

  const [playOpenSidebarSound] = useSound(
    "./src/assets/sounds/open_sidebar.mp3"
  );
  const [playCloseSidebarSound] = useSound(
    "./src/assets/sounds/close_sidebar.mp3"
  );
  const [playHoverMenuSound, { stop }] = useSound(
    "./src/assets/sounds/menu_option_hover.mp3"
  );
  const [playOpenSubmenuSound] = useSound("./src/assets/sounds/staple.mp3");
  const [playLogoSound] = useSound("./src/assets/sounds/pop_bubbles.mp3");

  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        if (open) playCloseSidebarSound();
        activeSubmenu && setActiveSubmenu(null); // Cerrar submenús al cerrar el sidebar
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const Menus = [
    {
      title: "Consideraciones iniciales",
      src: "Consideraciones",
    },
    {
      title: "Gramática y léxico",
      src: "Gramatica",
      submenu: [
        { title: "Alfabeto cirílico ruso" },
        { title: "Género de las palabras" },
        { title: "Número de los sustantivos" },
        { title: "La palabra rusa" },
        { title: "Casos gramaticales (información general)" },
        { title: "Pronombres" },
        { title: "Adjetivos" },
        { title: "Preposiciones" },
        { title: "Palabras interrogativas" },
        { title: "Casos gramaticales" },
        { title: "Verbos" },
        { title: "Prefijos y sufijos" },
        { title: "Adverbios" },
        { title: "Conjunciones" },
        { title: "Partículas" },
      ],
    },
    {
      title: "Cultura y contexto lingüístico",
      src: "Cultura",
      submenu: [
        { title: "Expresiones" },
        { title: "Nombres, apellidos y patronímicos" },
        { title: "El clima" },
        { title: "El tiempo" },
        { title: "Festividades en Rusia" },
      ],
    },
    {
      title: "Vocabulario",
      src: "Vocabulario",
      submenu: [{ title: "Los colores" }, { title: "Los números" }],
    },
  ];

  const handleSidebarToggle = (master: boolean) => {
    if (master) {
      setOpen(!open);
      playSidebarSound();
    } else {
      setOpen(true);
      if (!open) playSidebarSound();
    }
    if (!open) {
      setSearchQuery(""); // Vaciar el input cada vez que el sidebar se despliega
    }
    activeSubmenu && setActiveSubmenu(null); // Cerrar submenús al cerrar el sidebar
  };

  function playSidebarSound() {
    if (open) playCloseSidebarSound();
    else playOpenSidebarSound();
  }

  function logoHoverActions() {
    setShowLogoTooltip(true);
    playLogoSound();
  }

  function logoHoverLeaveActions() {
    setShowLogoTooltip(false);
  }

  function searchHoverActions() {
    setShowSearchTooltip(true);
    if (!open) playHoverMenuSound();
  }

  function searchHoverLeaveActions() {
    setShowSearchTooltip(false);
    setHoveredMenu(null);
  }

  function optionMenuHoverActions(index: number) {
    setHoveredMenu(index);
    playHoverMenuSound();
  }

  function optionMenuHoverLeaveActions() {
    setHoveredMenu(null);
    stop();
  }

  function handleSubmenuClickActions(index: number) {
    if (activeSubmenu === index) {
      // Si el submenú actual ya está abierto, lo cierra
      setActiveSubmenu(null);
    } else {
      // Si es un submenú diferente, cierra el anterior primero y luego abre el nuevo
      setActiveSubmenu(null); // Cierra el submenú actual (si lo hay)
      setTimeout(() => setActiveSubmenu(index), 0); // Abre el nuevo submenú con un pequeño retraso
    }
    playOpenSubmenuSound();
  }

  return (
    /* Filtro negro */

    <div
      className={`fixed bg-black ${
        open ? "bg-opacity-75" : "bg-opacity-0"
      }  w-full h-full z-40 transition-all duration-300 ease-in-out`}
    >
      {/* Contenedor principal */}

      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-cover bg-center h-full p-5 pt-6 fixed duration-300 rounded-lg shadow-lg mt-1 ml-1 z-50`}
        ref={menuRef}
        style={{
          backgroundImage: `url('./src/assets/images/Sidebars/Sidebar1.jpg')`,
        }}
      >
        {/* Logotipo */}

        <div className="flex gap-x-4 items-center mb-4">
          {open ? (
            // Logotipo en versión extendida

            <img
              src="./src/assets/icons/logo.png"
              className={`cursor-pointer duration-150 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
              onMouseEnter={() => logoHoverActions()}
              onMouseLeave={() => logoHoverLeaveActions()}
            />
          ) : (
            // Logotipo en versión reducida

            <img
              src="./src/assets/icons/desplegar.png"
              className={`cursor-pointer duration-150 hover:scale-125 transition-all ${
                open && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
              onMouseEnter={() => logoHoverActions()}
              onMouseLeave={() => logoHoverLeaveActions()}
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
          onMouseEnter={() => searchHoverActions()}
          onMouseLeave={() => searchHoverLeaveActions()}
        >
          {/* Icono de búsqueda */}

          <img
            src={`./src/assets/icons/Buscar.png`}
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
              className="group flex rounded-md p-2 font-BookerlyBold cursor-pointer text-white text-sm items-center gap-x-4 mt-6 hover:bg-light-white"
              onMouseEnter={() => optionMenuHoverActions(index)}
              onMouseLeave={() => optionMenuHoverLeaveActions()}
              onClick={() => handleSidebarToggle(false)}
            >
              {/* Iconos del menú */}

              <img
                src={`./src/assets/icons/${Menu.src}.png`}
                className="hover:scale-125 transition-all"
              />

              {/* Títulos del menú */}

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>

              {/* Íconos de submenú */}

              {open && Menu.submenu && (
                <img
                  src="./src/assets/icons/submenu.png"
                  className="w-7 ml-auto hover:scale-125 transition-all hover:bg-slate-500 rounded-full"
                  onClick={() => handleSubmenuClickActions(index)}
                />
              )}

              {/* Tooltips */}

              {!open && hoveredMenu === index && (
                <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs p-2 rounded shadow-lg text-nowrap">
                  {Menu.title}
                </div>
              )}

              {/* Submenus */}

              {open && Menu.submenu && activeSubmenu === index && (
                <ul className="absolute left-full ml-2 inset-y-0 my-auto bg-gray-700 py-2 rounded-xl shadow-lg text-sm text-nowrap max-h-[100%] h-fit overflow-y-auto scrollbar-hide border-8 border-gray-700">
                  {Menu.submenu.map(
                    (submenuItem: { title: string }, subIndex: number) => (
                      <li
                        key={subIndex}
                        className="p-2 hover:bg-gray-600 rounded"
                      >
                        {submenuItem.title}
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
