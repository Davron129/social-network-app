import { useMutation, useQueryClient } from '@tanstack/react-query';
import { profileApi } from '../api';
import { QUERY_KEY_PROFILE } from '@shared/constants';
import { IProfile } from '../types';

export const useProfileUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: IProfile) => await profileApi.updateProfile(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PROFILE] });
    },
  });
};
