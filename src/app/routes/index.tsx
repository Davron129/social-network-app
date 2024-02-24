import { RouteObject } from 'react-router-dom';
import {
  ROUTE_CONTACTS,
  ROUTE_CONTACTS_VIEW,
  ROUTE_HOME,
  ROUTE_SETTINGS,
  ROUTE_SETTINGS_PROFILE,
} from '@shared/constants';

import { HomePage } from '@pages/home';
import { ProfilePage } from '@pages/settings';
import { ContactsPage } from '@pages/contacts';
import { SelectChatScreen } from '@shared/screens';
import { ContactsLayout, MainLayout, SettingsLayout } from '@shared/layouts';

export const routes: RouteObject[] = [
  {
    path: ROUTE_HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE_CONTACTS,
        element: <ContactsLayout />,
        children: [
          {
            index: true,
            element: <SelectChatScreen />,
          },
          {
            path: ROUTE_CONTACTS_VIEW,
            element: <ContactsPage />,
          },
        ],
      },
      {
        path: ROUTE_SETTINGS,
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <SelectChatScreen />,
          },
          {
            path: ROUTE_SETTINGS_PROFILE,
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
];
