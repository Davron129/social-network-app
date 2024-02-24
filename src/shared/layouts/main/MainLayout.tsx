import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="w-screen h-screen border-secondary bg-secondary">
      <Outlet />
    </div>
  );
};
