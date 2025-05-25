import  { useState, ReactNode, useEffect, useRef } from 'react';
import Header from './header';
interface DefaultLayout {
  children: ReactNode;
  panel?: {
    dataPanel?: any;
    panelOpen: boolean;
    setPanelOpen: Function;
    formPanel: ReactNode | undefined;
  } | null
}
const DefaultLayout: React.FC<DefaultLayout> = ({ children, panel }) => {
  const [sidebarStatic, setSidebarStatic] = useState(window.innerWidth >= 1300);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1300);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setSidebarStatic(false);
        setSidebarOpen(false);
      } else {
        setSidebarStatic(true);
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);  
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && window.innerWidth < 1300) {
      setSidebarOpen(false);
      setSidebarStatic(false);
    }
  };
  return (
    <div className={`overflow-hidden `}>
      <div className="flex h-screen w-full relative">
        <div className={`${sidebarStatic ? '1.2xl:pl-64 sm:pl-20' : 'sm:pl-20'} bg-blue-100 transition-all duration-300 flex w-full flex-col relative`}>
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarStatic={sidebarStatic}
            setSidebarStatic={setSidebarStatic}
          />
          <main >
            <div className="max-w-screen-3xl max-h-screen p-2 xl:pl-4 2xl:pl-10 3xl:pl-32">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout;