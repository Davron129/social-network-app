import { RouteObject } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SETTINGS, ROUTE_SETTINGS_PROFILE } from '@shared/constants';

import { HomePage } from '@pages/home';
import { ProfilePage } from '@pages/settings';
import { SelectChatScreen } from '@shared/screens';
import { MainLayout, SettingsLayout } from '@shared/layouts';

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
