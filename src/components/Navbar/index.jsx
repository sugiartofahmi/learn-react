const Navbar = () => {
  return (
    <header className="w-full h-[10vh] flex justify-between px-5 items-center bg-gray-200 font-bold">
      <figure className="flex justify-center items-center gap-x-3">
        <img width="50" src="src/assets/img/logo.png" alt="" />
        <figcaption>FAHMISGRT</figcaption>
      </figure>
      <nav>
        <ul className="flex gap-x-5">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Contact</span>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
