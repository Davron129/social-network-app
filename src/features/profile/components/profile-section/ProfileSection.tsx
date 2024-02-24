import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { ROUTE_SETTINGS_PROFILE } from '@shared/constants';

export const ProfileSection = () => {
  const { pathname } = useLocation();

  const isActive = pathname === ROUTE_SETTINGS_PROFILE;

  const linkClasses = clsx({
    'flex items-center gap-x-2.5 p-4 rounded-2xl relative': true,
    'bg-active': isActive,
  });

  const emailClasses = clsx([
    'text-sm truncate',
    {
      'text-muted': !isActive,
      'text-white': isActive,
    },
  ]);

  return (
    <Link to={ROUTE_SETTINGS_PROFILE} className={linkClasses}>
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden aspect-square flex-2">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHRCVlEMl7eqg/profile-displayphoto-shrink_400_400/0/1708437149639?e=1714003200&v=beta&t=dm2Jo52jRDfBh8PltUljmNinStwAT81sWPQ1rV6-tRo"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 overflow-hidden">
        <p className="text-white text-sm font-medium truncate">Khaydarov Sherbek</p>
        <p className={emailClasses}>sherbek.khaydarov99@gmail.com</p>
      </div>

      {!isActive && <HiChevronRight className="absolute text-muted text-2xl -right-2" />}
    </Link>
  );
};
