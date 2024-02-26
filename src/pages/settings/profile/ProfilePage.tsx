import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import { ROUTE_SETTINGS } from '@shared/constants';
import { ProfileForm, ProfileInfo } from '@features/profile/components';
import { LoadingScreen } from '@shared/screens/loading-screen';
import { useProfile } from '@features/profile/hooks/useProfile';
import { useRef, useState } from 'react';
import { IProfileQuery } from '@features/profile/types';
import { useProfileUpdate } from '@features/profile/hooks';
import { AnimatePresence } from 'framer-motion';

export const ProfilePage = () => {
  const { user, isLoading } = useProfile();
  const { mutateAsync: updateProfile } = useProfileUpdate();
  const [isEditable, setIsEditable] = useState(false);
  const formRef = useRef<HTMLButtonElement>(null);

  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onSubmit = (values: IProfileQuery) => {
    if (user) {
      updateProfile({
        ...values,
        id: user.id,
      }).then(() => {
        toggleEditable();
      });
    }
  };

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.click();
    }
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
        {isEditable ? (
          <button className="text-blue-primary" onClick={handleSubmit}>
            Done
          </button>
        ) : (
          <button className="text-blue-primary" onClick={toggleEditable}>
            Edit
          </button>
        )}
      </header>

      <main className="p-5 flex-1 overflow-y-auto">
        {user && (
          <AnimatePresence initial={false}>
            {isEditable ? (
              <ProfileForm defaultValues={user} onExternalSubmit={onSubmit} ref={formRef} />
            ) : (
              <ProfileInfo user={user} />
            )}
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};
