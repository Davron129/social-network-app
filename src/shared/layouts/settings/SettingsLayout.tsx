import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@features/sidebar/components';
import { ProfileSection } from '@features/profile/components';

export const SettingsLayout = () => {
  useEffect(() => {
    fetch('/api/users/me');
  }, []);

  return (
    <div className="flex h-full">
      <Sidebar title="Settings">
        <div className="p-2">
          <ProfileSection />
        </div>
      </Sidebar>
      <div className="flex-1 border-l border-secondary">
        <Outlet />
      </div>
    </div>
  );
};
