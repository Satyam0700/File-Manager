const Navbar = () => {
  return (
    <div className="bg-white flex ml-[226px] items-center justify-between shadow w-[84vw] px-8 py-3">
      <p className="text-2xl text-[#404965] cursor-pointer">File Manager</p>
      <div className="bg-[#814EE7] flex items-center gap-1 px-4 py-2 rounded-md cursor-pointer shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-white font-extrabold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <p className="text-white font-extrabold text-base"> Upload</p>
      </div>
    </div>
  );
};

export default Navbar;
