
type Props = {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void; 
  setSidebarStatic: (arg: boolean) => void;
  sidebarStatic: boolean | undefined;
}

const Header = ({ sidebarOpen, setSidebarOpen, setSidebarStatic, sidebarStatic}: Props) => {

  const handleClickHamburger = (e: any) => {
    e.stopPropagation();  
    setSidebarOpen(!sidebarOpen); 
    setSidebarStatic(!sidebarStatic);
    localStorage.setItem('sidebar-static', JSON.stringify(!sidebarStatic));
  }

  return (
    <header className="relative px-4 py-1 top-0 z-101 flex w-full bg-slate-700">
      <div className={`flex flex-grow items-center justify-between `}>       
        <button
          tabIndex={-1}
          onClick={handleClickHamburger}
          className={`
            relative h-10 w-10 flex justify-center items-center rounded border border-slate-700 bg-slate-500 hover:bg-slate-400: hover:border-slate-500
            cursor-pointer
          `}
        >
          <div className="absolute">
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
        <ul className="flex items-center gap-2">
          
        </ul>
      </div>
    </header>
  );
};

export default Header;