import { useState, useEffect, useRef } from "react";

const Menu = [
  { title: "Consideraciones iniciales", src: "Consideraciones" },
  {
    title: "Gramática y léxico",
    src: "Gramatica",
    subMenu: [
      { title: "Alfabeto cirílico ruso" },
      { title: "Género de las palabras" },
      { title: "Número de los sustantivos" },
      { title: "La palabra rusa" },
      { title: "Casos gramaticales (información general)" },
      {
        title: "Pronombres",
        subSubMenu: [
          { title: "Personales" },
          { title: "Posesivos" },
          { title: "Irregulares" },
        ],
      },
      { title: "Adjetivos" },
      { title: "Preposiciones" },
      { title: "Palabras interrogativas" },
      { title: "Casos gramaticales" },
      {
        title: "Verbos",
        subSubMenu: [
          { title: "Verbos de movimiento" },
          { title: "Verbos adjetivos" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
          { title: "Relleno" },
        ],
      },
      { title: "Prefijos y sufijos" },
      { title: "Adverbios" },
      { title: "Conjunciones" },
      { title: "Partículas" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
      { title: "Relleno" },
    ],
  },
  {
    title: "Cultura y contexto lingüístico",
    src: "Cultura",
    subMenu: [
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
    subMenu: [{ title: "Los colores" }, { title: "Los números" }],
  },
];

export default function Prueba() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null); // Identificar el submenú abierto
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<number | null>(null); // Identificar el sub-submenú abierto
  const [showLogoTooltip, setShowLogoTooltip] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  // DEFECTO EN EL CLICK OUTSIDE MENUS CONTAINER
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
        if (openMenu) playSidebarSound();
        activeSubMenu && setActiveSubMenu(null); // Cerrar submenús al cerrar el sidebar
        activeSubSubMenu && setActiveSubSubMenu(null); // Cerrar sub-submenús al cerrar el sidebar
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleMenuClick = (
    index: number,
    item: {
      title: string;
      src?: string;
      subMenu?: { title: string; subSubMenu?: { title: string }[] }[];
    }
  ) => {
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
    if (item.subMenu) {
      setActiveSubMenu(activeSubMenu === index ? null : index);
    } else {
      setActiveSubMenu(null);
    }
    playOpenSelectionSound();
  };

  const handleSidebarToggle = (master: boolean) => {
    if (openMenu) {
      setActiveSubMenu(null); // Cierra submenús al cerrar el sidebar
      setActiveSubSubMenu(null); // Cierra sub-submenús al cerrar el sidebar
    }

    if (master) {
      setOpenMenu(!openMenu);
      playSidebarSound();
    } else {
      setOpenMenu(true);
      if (!openMenu) {
        playSidebarSound();
      }
    }
    if (!openMenu) {
      setSearchQuery(""); // Vaciar el input cada vez que el sidebar se despliega
    }
  };

  const playSidebarSound = () => {
    const sidebarSound = new Audio(
      !openMenu
        ? "./src/assets/sounds/close_sidebar.mp3"
        : "./src/assets/sounds/open_sidebar.mp3"
    );
    sidebarSound.play();
  };

  const playIconSound = () => {
    const iconSound = new Audio("./src/assets/sounds/pop_bubbles.mp3");
    iconSound.play();
  };

  const playOptionSound = () => {
    const optionSound = new Audio("./src/assets/sounds/menu_option_hover.mp3");
    optionSound.play();
  };

  const playOpenSelectionSound = () => {
    const openSelectionSound = new Audio("./src/assets/sounds/staple.mp3");
    openSelectionSound.play();
  };

  const handleSubMenuClick = (
    subIndex: number,
    subItem: { title: string; subSubMenu?: { title: string }[] }
  ) => {
    if (subItem.subSubMenu)
      setActiveSubSubMenu(activeSubSubMenu === subIndex ? null : subIndex);
    else setActiveSubSubMenu(null); // Cerrar sub-submenú si no tiene sub-submenú
    playOpenSelectionSound();
  };
  const handleLogoHover = () => {
    setShowLogoTooltip(true);
    playIconSound();
  };

  const handleSearchHover = () => {
    setShowSearchTooltip(true);
    playOptionSound();
  };

  const handleOptionMenuHover = (index: number) => {
    setHoveredMenu(index);
    playOptionSound();
  };

  return (
    // Filtro negro

    <div
      id="black_filter"
      className={`fixed bg-black ${
        openMenu ? "bg-opacity-75" : "bg-opacity-0"
      } w-full h-full transition-all duration-300 ease-in-out z-50`}
    >
      {/* Contenedor de los menús */}

      <div
        id="menus_container"
        className="flex gap-1 w-fit h-full"
        ref={menuRef}
      >
        {/* Menú */}

        <div
          id="menu"
          className={`${
            !openMenu ? "w-20" : "w-72"
          } bg-cover bg-center transition-all duration-300 ease-in-out rounded-lg h-full p-5 pt-6 mt-1 ml-1 shadow-lg `}
          style={{
            backgroundImage: `url('./src/assets/images/Sidebars/Sidebar1.jpg')`,
          }}
        >
          {/* Logotipo */}

          <div
            id="logo_container"
            className="flex gap-x-4 items-center mb-4 relative"
          >
            {/*Imagen del Logotipo*/}

            <img
              id="logotype"
              src={
                openMenu
                  ? "./src/assets/icons/logo.png"
                  : "./src/assets/icons/desplegar.png"
              }
              className={`cursor-pointer duration-300 hover:scale-125 transition-all ${
                openMenu && "rotate-[360deg]"
              }`}
              onClick={() => handleSidebarToggle(true)}
              onMouseEnter={() => handleLogoHover()}
              onMouseLeave={() => setShowLogoTooltip(false)}
            />

            {/* Tooltip del logotipo */}

            {showLogoTooltip && (
              <div
                className={`absolute left-full ml-7 font-BookerlyBold text-xs p-2 rounded shadow-lg text-nowrap ${
                  openMenu ? "bg-white text-gray-800" : "bg-gray-800 text-white"
                }`}
              >
                {openMenu ? "Retraer menú" : "Desplegar menú"}
              </div>
            )}

            {/* Título del sidebar */}

            <h1
              id="sidebar_title"
              className={`text-white origin-left font-BookerlyBoldItalic text-lg duration-200 ${
                !openMenu && "scale-0"
              }`}
            >
              TEMARIO:
            </h1>
          </div>

          {/* División #1 */}

          <hr id="division_1" className="my-1 border-sky-800 border" />

          {/* Buscador */}

          <div
            id="search_container"
            className={`flex rounded-md py-2 font-BookerlyBold cursor-pointer ${
              !openMenu && `hover:bg-light-white`
            }  text-gray-300 text-xs items-center gap-x-1 relative`}
            onClick={() => handleSidebarToggle(false)}
            onMouseEnter={() => handleSearchHover()}
            onMouseLeave={() => setShowSearchTooltip(false)}
          >
            {/* Icono de búsqueda */}

            <img
              id="search_icon"
              src={`./src/assets/icons/Buscar.png`}
              className="absolute pl-2 z-10 hover:scale-125 transition-all"
            />

            {/* Input de búsqueda */}

            <input
              id="search_input"
              type="text"
              placeholder="Buscar . . . ."
              value={searchQuery} // Controlar el valor del input con el estado
              onChange={(e) => setSearchQuery(e.target.value)} // Actualizar el estado al cambiar el input
              className={`py-2 pl-10 pr-2 rounded-xl border-2 text-black border-blue-300 focus:bg-slate-100 focus:outline-sky-500 transition-width duration-300 ${
                openMenu ? "w-full" : "w-0 opacity-0"
              }`}
            />

            {/* Tooltip del campo de búsqueda */}

            {!openMenu && showSearchTooltip && (
              <div
                id="search_tooltip"
                className="absolute left-full ml-7 font-BookerlyBold text-xs p-2 rounded shadow-lg text-nowrap bg-gray-800 text-white"
              >
                Buscar contenido
              </div>
            )}
          </div>

          {/* División #2 */}

          <hr id="division_2" className="my-1 border-sky-800 border" />

          {/* Menú de opciones */}

          {Menu.map((item, index) => (
            <ul key={index} className="mt-4">
              {/* REVISAR EL ON CLICK */}
              <li
                className="group flex rounded-md p-2 font-BookerlyBold cursor-pointer text-white text-sm items-center gap-x-4 mt-6 hover:bg-light-white relative"
                onClick={() => !openMenu && handleSidebarToggle(false)}
                onMouseEnter={() => handleOptionMenuHover(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* Íconos del menú */}

                <img
                  src={`./src/assets/icons/${item.src}.png`}
                  className="hover:scale-125 transition-all"
                />

                {/* Títulos del menú */}

                <span
                  className={`${
                    !openMenu && "hidden"
                  } origin-left duration-200`}
                >
                  {item.title}
                </span>

                {/* Íconos de apertura del menú */}

                {openMenu && item.subMenu && (
                  <img
                    src="./src/assets/icons/submenu.png"
                    className="w-7 ml-auto hover:scale-125 transition-all hover:bg-slate-500 rounded-full"
                    onClick={() => handleMenuClick(index, item)}
                  />
                )}

                {/* Tooltips */}

                {!openMenu && hoveredMenu === index && (
                  <div className="absolute left-full ml-7 bg-gray-800 text-white text-xs p-2 rounded shadow-lg text-nowrap">
                    {item.title}
                  </div>
                )}
              </li>
            </ul>
          ))}
        </div>

        {/* SubMenú */}

        <ul
          id="subMenu"
          className={`${
            activeSubMenu === null ? "w-0 opacity-0 h-fit" : "w-fit"
          } transition-all duration-300 ease-in-out inset-y-0 my-auto py-2 rounded-xl shadow-lg text-sm text-nowrap max-h-[98%] h-fit overflow-y-auto scrollbar-hide border-y-8 px-2 bg-cover bg-center`}
          style={{
            backgroundImage: `url('./src/assets/images/Sidebars/Sidebar2.jpg')`,
            borderImage: `url('./src/assets/images/Sidebars/Sidebar2.jpg') 0 0 round`,
          }}
        >
          {activeSubMenu !== null &&
            Menu[activeSubMenu].subMenu &&
            Menu[activeSubMenu].subMenu.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="p-2 rounded hover:bg-white hover:bg-opacity-25 flex items-center text-white font-BookerlyBold"
                onMouseEnter={playOptionSound}
              >
                {/* Títulos del submenú */}

                <span
                  className={`${
                    !openMenu && "hidden"
                  } origin-left duration-200`}
                >
                  {subItem.title}
                </span>

                {/* Íconos de apertura del submenú */}

                {openMenu && subItem.subSubMenu && (
                  <img
                    src="./src/assets/icons/submenu.png"
                    className="w-7 ml-auto hover:scale-125 transition-all hover:bg-slate-500 rounded-full"
                    onClick={() => handleSubMenuClick(subIndex, subItem)}
                  />
                )}
              </li>
            ))}
        </ul>

        {/* SubSubMenú */}

        <ul
          id="subSubMenu"
          className={`${
            activeSubSubMenu === null ? "w-0 opacity-0 h-fit" : "w-fit"
          } transition-all duration-300 ease-in-out inset-y-0 my-auto py-2 rounded-xl shadow-lg text-sm text-nowrap max-h-[96%] h-fit overflow-y-auto scrollbar-hide border-y-8 px-2 bg-cover bg-center`}
          style={{
            backgroundImage: `url('./src/assets/images/Sidebars/Sidebar3.jpg')`,
            borderImage: `url('./src/assets/images/Sidebars/Sidebar3.jpg') 0 0 round`,
          }}
        >
          {activeSubMenu !== null &&
            activeSubSubMenu !== null &&
            Menu[activeSubMenu].subMenu &&
            Menu[activeSubMenu].subMenu[activeSubSubMenu].subSubMenu &&
            Menu[activeSubMenu].subMenu[activeSubSubMenu].subSubMenu.map(
              (subSubItem, subSubIndex) => (
                <li
                  className="p-2 rounded hover:bg-white hover:bg-opacity-25 flex items-center text-white font-BookerlyBold"
                  key={subSubIndex}
                  onMouseEnter={playOptionSound}
                >
                  <span className="text-white">{subSubItem.title}</span>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
}
