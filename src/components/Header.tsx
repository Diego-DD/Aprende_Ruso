interface HeaderProps {
  titulo?: string;
}

function Header({ titulo = "APRENDE RUSO" }: HeaderProps) {
  return (
    <div className="flex">
      <div className="w-20"></div>
      <header
        className="bg-cover bg-center h-[15%] w-full text-white p-4 flex items-center justify-center rounded-xl ml-3"
        style={{
          backgroundImage: `url('/images/Diseño/header.jpg')`,
        }}
      >
        <h1 className="text-5xl font-RussianSpringBoldItalic text-center drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)] bg-gradient-to-b from-white from-30% via-blue-950 via-50% to-red-600 to-70% inline-block text-transparent bg-clip-text">
          {titulo}
        </h1>
      </header>
    </div>
  );
}

export default Header;
