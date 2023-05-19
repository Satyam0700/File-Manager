import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] fixed top-0 left-0 z-0 shadow w-[226px] px-5 py-8">
      <div className="flex items-center gap-3">
        <img src={logo} className="w-[24px]" alt="" />
        <p className="font-bold text-lg">Stealth</p>
      </div>
      <hr className="w-full h-[1px] m-4 bg-[#DCE0E3]"/>
      <div className="bg-[#F0F3FC] cursor-pointer flex items-center gap-3 px-4 py-2 rounded-md">
        <img src={logo2} className="w-[24px]" alt="" />
        <p className="text-base text-[#272F48]">File Manager</p>
      </div>

    </div>
  );
};

export default Sidebar;
