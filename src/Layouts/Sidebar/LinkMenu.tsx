import { ReactNode } from 'react';

type LinkProps = {
  pathname: string;
  navigateTo: string;
  title: string;
  icon: ReactNode
  sidebarOpen: boolean;
  setSidebarStatic: Function
  setSidebarOpen: Function
  clasName?: string
  hoverTitle?: string
}

export default function LinkMenu({ pathname, navigateTo, title, icon, sidebarOpen, clasName, hoverTitle ,setSidebarOpen, setSidebarStatic}: LinkProps) {
  const isActive = new RegExp(`^/${navigateTo}(/|$)`).test(pathname);	
  return (
    <li>

    </li>
  );
}
