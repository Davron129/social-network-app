import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_PROFILE } from '@shared/constants';
import { profileApi } from '../api';

export const useProfile = () => {
  return useQuery({
    queryKey: [QUERY_KEY_PROFILE],
    queryFn: () => profileApi.fetchProfile(),
    staleTime: Infinity,
  });
};
