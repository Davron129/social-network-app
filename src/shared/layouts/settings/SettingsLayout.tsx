import { Sidebar } from '@features/sidebar/components';
import { Outlet } from 'react-router-dom';

export const SettingsLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar title="Settings">setting</Sidebar>
      <div className="flex-1 border-l border-secondary">
        <Outlet />
      </div>
    </div>
  );
};
