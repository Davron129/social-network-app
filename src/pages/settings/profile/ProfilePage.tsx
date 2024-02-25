import { ProfileInfo } from '@features/profile/components';
import { useProfile } from '@features/profile/hooks/useProfile';
import { LoadingScreen } from '@shared/screens/loading-screen';

export const ProfilePage = () => {
  const { user, isLoading } = useProfile();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-full flex flex-col bg-dark">
      <header className="h-12 bg-primary border-b border-secondary flex-2"></header>

      <main className="p-5 flex-1 overflow-y-auto">{user && <ProfileInfo user={user} />}</main>
    </div>
  );
};
