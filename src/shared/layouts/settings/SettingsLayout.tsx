import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '@features/sidebar/components';
import { ProfileSection } from '@features/profile/components';
import { ROUTE_SETTINGS } from '@shared/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from '@shared/hooks';

export const SettingsLayout = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isSettingsPage = pathname === ROUTE_SETTINGS;

  const outletProps = isMobile
    ? {
        animate: {
          width: isSettingsPage ? 0 : '100%',
        },
        transition: { type: 'tween', duration: 0.3 },
      }
    : {};

  return (
    <div className="flex h-full">
      <AnimatePresence initial={false} mode="popLayout">
        <Sidebar title="Settings" key="sidebar" isVisible={isSettingsPage} isMobile={isMobile}>
          <div className="p-2">
            <ProfileSection />
          </div>
        </Sidebar>
        <motion.div key="outlet" className="flex-1 border-l border-secondary" {...outletProps}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
