const Search = () => {
  return (
    <div className="flex items-center gap-2 max-w-fit px-6 py-2 rounded-md bg-[#FAFAFA] border-2 Border-[#DCE0E3]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-[#7C8DC1]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        className="bg-transparent px-2 outline-none border-none placeholder:text-[#7C8DC1]"
        placeholder="Search by name"
      />
    </div>
  );
};

export default Search;
