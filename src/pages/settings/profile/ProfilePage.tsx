import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import { ROUTE_SETTINGS } from '@shared/constants';
import { ProfileForm, ProfileInfo } from '@features/profile/components';
import { LoadingScreen } from '@shared/screens/loading-screen';
import { useProfile } from '@features/profile/hooks/useProfile';
import { useState } from 'react';
import { IProfileQuery } from '@features/profile/types';

export const ProfilePage = () => {
  const { user, isLoading } = useProfile();
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onSubmit = (values: IProfileQuery) => {
    console.log(values);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-full flex flex-col bg-dark">
      <header className="h-12 px-5 bg-primary border-b border-secondary flex-2 flex items-center justify-between relative">
        <h2 className="text-sm text-white font-medium text-nowrap absolute left-1/2 -translate-x-1/2">
          Profile Info
        </h2>
        <Link to={ROUTE_SETTINGS} className="text-blue-primary flex items-center gap-x-2">
          <HiChevronLeft className="text-lg" />
          <span>Back</span>
        </Link>
        <button className="text-blue-primary" onClick={toggleEditable}>
          Edit
        </button>
      </header>

      <main className="p-5 flex-1 overflow-y-auto">
        {user &&
          (isEditable ? (
            <ProfileForm defaultValues={user} onExternalSubmit={onSubmit} />
          ) : (
            <ProfileInfo user={user} />
          ))}
      </main>
    </div>
  );
};
