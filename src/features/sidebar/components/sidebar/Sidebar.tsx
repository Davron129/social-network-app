import { FC, PropsWithChildren } from 'react';
import { SidebarTitle } from '../sidebar-title';
import { SidebarBottomNavbar } from '../sidebar-bottom-nav';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  isVisible?: boolean;
  isMobile?: boolean;
}

export const Sidebar: FC<PropsWithChildren<Props>> = ({ title, children, isVisible, isMobile }) => {
  const asideProps = isMobile
    ? {
        animate: { width: isVisible ? '100%' : 0 },
        transition: { type: 'tween', duration: 0.2 },
      }
    : {};

  return (
    <motion.aside
      className="w-full sm:w-[310px] flex flex-col flex-2 bg-primary overflow-hidden"
      {...asideProps}
    >
      <SidebarTitle title={title} />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <SidebarBottomNavbar />
    </motion.aside>
  );
};
