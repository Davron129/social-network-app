import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { HiCog, HiUserCircle } from 'react-icons/hi2';
import { ROUTE_CONTACTS, ROUTE_SETTINGS } from '@shared/constants';

export const SidebarBottomNavbar = () => {
  return (
    <div className="h-12 border-t border-secondary bg-primary grid grid-cols-2">
      <NavLink to={ROUTE_CONTACTS} className="col-span-1 flex items-center justify-center">
        {({ isActive }) => (
          <HiUserCircle
            className={clsx('text-3xl', isActive ? 'text-blue-primary' : 'text-muted')}
          />
        )}
      </NavLink>
      <NavLink to={ROUTE_SETTINGS} className="col-span-1 flex items-center justify-center">
        {({ isActive }) => (
          <HiCog className={clsx('text-3xl', isActive ? 'text-blue-primary' : 'text-muted')} />
        )}
      </NavLink>
    </div>
  );
};
