import { IProfile } from '@features/profile/types';
import { http, HttpResponse } from 'msw';

const user: IProfile = {
  id: '100',
  name: 'Davron Normuminov',
  email: 'normominovdavron001@gmail.com',
  bio: 'Software Engineer from Uzbekistan',
  profileImg:
    'https://media.licdn.com/dms/image/D4D03AQHRCVlEMl7eqg/profile-displayphoto-shrink_400_400/0/1708437149639?e=1714003200&v=beta&t=dm2Jo52jRDfBh8PltUljmNinStwAT81sWPQ1rV6-tRo',
};

export const handlers = [
  http.get('/api/users/me', () => {
    return HttpResponse.json(user);
  }),

  http.post<any, IProfile>('/api/users/me/update', async ({ request }) => {
    const payload = await request.json();

    user.name = payload.name;
    user.email = payload.email;
    user.bio = payload.bio;
    user.profileImg = payload.profileImg;

    return HttpResponse.json(user, { status: 201 });
  }),
];
