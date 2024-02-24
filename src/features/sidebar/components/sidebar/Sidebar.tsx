import { FC, PropsWithChildren } from 'react';
import { SidebarTitle } from '../sidebar-title';
import { SidebarBottomNavbar } from '../sidebar-bottom-nav';

interface Props {
  title: string;
}

export const Sidebar: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <aside className="w-[310px] flex flex-col flex-2 bg-primary">
      <SidebarTitle title={title} />
      {children}
      <SidebarBottomNavbar />
    </aside>
  );
};
