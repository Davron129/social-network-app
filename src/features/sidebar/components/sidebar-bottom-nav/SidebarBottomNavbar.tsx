import { HiCog, HiUserCircle } from 'react-icons/hi2';

export const SidebarBottomNavbar = () => {
  return (
    <div className="h-12 border-t border-secondary bg-primary grid grid-cols-2">
      <div className="col-span-1 flex items-center justify-center">
        <HiUserCircle className="text-muted text-3xl" />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <HiCog className="text-muted text-3xl" />
      </div>
    </div>
  );
};
