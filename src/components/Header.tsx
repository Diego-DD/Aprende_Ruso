interface HeaderProps {
  titulo?: string;
}

function Header({ titulo = "APRENDE RUSO" }: HeaderProps) {
  return (
    <div className="w-full mt-1 z-0">
      {/* Cuerpo e imagen del header */}

      <header
        className="w-full bg-cover bg-center h-[15%] text-white p-4 flex items-center justify-center rounded-xl shadow-lg sm:ml-2 md:ml-1 lg:ml-0"
        style={{
          backgroundImage: `url('./src/assets/images/headers/2xl.jpg')`,
        }}
      >
        {/* Título del header */}

        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:6xl 2xl:7xl font-RussianSpringBoldItalic text-center drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)] bg-gradient-to-b from-white from-30% via-blue-950 via-50% to-red-600 to-70% inline-block text-transparent bg-clip-text">
          {titulo}
        </h1>
      </header>
    </div>
  );
}

export default Header;
