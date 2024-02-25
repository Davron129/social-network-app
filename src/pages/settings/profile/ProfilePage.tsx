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

      <main className="p-5 flex-1 overflow-y-auto">
        <div className="max-w-[600px] mx-auto">
          <div className="mb-5 h-[120px] w-[120px] rounded-full bg-secondary flex-2 overflow-hidden aspect-square mx-auto">
            <img src={user?.profileImg} alt={user?.name} className="object-cover w-full h-full" />
          </div>

          <p className="text-center text-md text-white mb-5">{user?.name}</p>

          <div className="p-4 bg-primary rounded-lg divide-y divide-secondary">
            <div>
              <span className="text-xs text-blue-secondary">bio</span>
              <p className="text-sm text-white mb-2">{user?.bio}</p>
            </div>
            <div>
              <span className="text-xs text-blue-secondary">email</span>
              <p className="text-sm text-white mb-2">{user?.email}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
