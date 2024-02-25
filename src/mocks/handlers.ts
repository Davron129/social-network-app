// src/mocks/handlers.js
import { IProfile } from '@features/profile/types';
import { http, HttpResponse } from 'msw';

const contactsArray = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    bio: 'Bret',
    profileImg: '',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    bio: 'Antonette',
    profileImg: '',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    bio: 'Samantha',
    profileImg: '',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    bio: 'Karianne',
    profileImg: '',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    bio: 'Kamren',
    profileImg: '',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    bio: 'Leopoldo_Corkery',
    profileImg: '',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    bio: 'Elwyn.Skiles',
    profileImg: '',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    bio: 'Maxime_Nienow',
    profileImg: '',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    bio: 'Delphine',
    profileImg: '',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    bio: 'Moriah.Stanton',
    profileImg: '',
  },
];

const user: IProfile = {
  id: '100',
  name: 'Davron Normuminov',
  email: 'normominovdavron001@gmail.com',
  bio: 'Software Engineer from Uzbekistan',
  profileImg:
    'https://media.licdn.com/dms/image/D4D03AQHRCVlEMl7eqg/profile-displayphoto-shrink_400_400/0/1708437149639?e=1714003200&v=beta&t=dm2Jo52jRDfBh8PltUljmNinStwAT81sWPQ1rV6-tRo',
};

export const handlers = [
  http.get('/api/contacts', () => {
    return HttpResponse.json({ data: contactsArray });
  }),

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
