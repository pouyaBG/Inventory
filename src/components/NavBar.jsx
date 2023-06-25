const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-center h-12 gap-x-4 bg-slate-700 rounded-b mb-5 fixed top-0 min-w-screen  w-full">
        <h1 className="text-xl font-bold text-slate-200">Inventory shop App</h1>
        <span
          className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300"
          id="length"
        >
          7
        </span>
      </div>
    </>
  );
};

export default NavBar;
