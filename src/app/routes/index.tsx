import { HomePage } from '@pages/home';
import { ROUTE_HOME } from '@shared/constants';
import { MainLayout } from '@shared/layouts';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: ROUTE_HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
