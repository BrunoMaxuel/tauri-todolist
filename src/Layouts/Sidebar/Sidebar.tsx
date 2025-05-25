
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarStatic: Function;
  sidebarStatic: boolean;
  setSidebarOpen: Function;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, sidebarStatic, setSidebarStatic }: SidebarProps) => {
  const handleMouseEnter = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (sidebarOpen && !sidebarStatic) {
      setSidebarOpen(false);
    }
  };
  const handleClickHamburger = () => {
    setSidebarOpen(!sidebarOpen); 
    setSidebarStatic(!sidebarStatic);
    localStorage.setItem('sidebar-static', JSON.stringify(!sidebarStatic));
  }
  return (
    <aside 
      className="text-gray-300 h-screen w-64 relative bg-slate-700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between p-4">
        <button
          tabIndex={-1}
          onClick={handleClickHamburger}
          className={`
            relative 1.2xl:hidden  h-9 w-9 flex justify-center items-center rounded border border-slate-600 bg-slate-500 hover:bg-slate-400
            ${sidebarOpen ? 'block' : 'hidden'}
            ${sidebarStatic ? '' : 'hidden'}
          `}
        >
          <div className="absolute cursor-pointer">
            <div
              className={`my-[3px] h-[3px] w-6 rounded bg-black ease-in-out delay-200 duration-200
              `}
            ></div>
            <div
              className={`my-[3px] h-[3px] w-6 rounded bg-black ease-in-out delay-500 duration-200
              `}
            ></div>
            <div
              className={`my-[3px] h-[3px] w-6 rounded bg-black ease-in-out delay-700 duration-200
              `}
            ></div>
          </div>
        </button> 
      </div>
      <div className="flex flex-col pt-1 duration-300 ease-linear relative">
        <nav className="p-2 ">
          <div className=''>
            <ul className="mb-4 h-[500px] 2xl:h-[550px] scroll-sidebar overflow-auto  flex flex-col gap-2">
              
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
