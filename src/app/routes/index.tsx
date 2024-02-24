import { RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { ContactsPage } from '@pages/contacts';
import { SelectChatScreen } from '@shared/screens';
import { ContactsLayout, MainLayout } from '@shared/layouts';
import { ROUTE_CONTACTS, ROUTE_CONTACTS_VIEW, ROUTE_HOME } from '@shared/constants';

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
    ],
  },
];
