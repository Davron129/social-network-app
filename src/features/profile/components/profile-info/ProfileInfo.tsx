import { FC } from 'react';
import { IProfile } from '@features/profile/types';

interface Props {
  user: IProfile;
}

export const ProfileInfo: FC<Props> = ({ user }) => {
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="mb-5 h-[120px] w-[120px] rounded-full bg-secondary flex-2 overflow-hidden aspect-square mx-auto">
        <img src={user.profileImg} alt={user.name} className="object-cover w-full h-full" />
      </div>

      <p className="text-center text-md text-white mb-5">{user.name}</p>

      <div className="p-4 bg-primary rounded-lg divide-y divide-secondary">
        <div>
          <span className="text-xs text-blue-secondary">bio</span>
          <p className="text-sm text-white mb-2">{user.bio}</p>
        </div>
        <div>
          <span className="text-xs text-blue-secondary">email</span>
          <p className="text-sm text-white mb-2">{user.email}</p>
        </div>
      </div>
    </div>
  );
};
