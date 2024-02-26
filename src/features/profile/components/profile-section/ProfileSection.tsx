import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { ROUTE_SETTINGS_PROFILE } from '@shared/constants';
import { useProfile } from '@features/profile/hooks/useProfile';

export const ProfileSection = () => {
  const { data: user } = useProfile();
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
        <img src={user?.profileImg} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="flex-1 overflow-hidden">
        <p className="text-white text-sm font-medium truncate">{user?.name}</p>
        <p className={emailClasses}>{user?.email}</p>
      </div>

      {!isActive && <HiChevronRight className="absolute text-muted text-2xl -right-2" />}
    </Link>
  );
};
