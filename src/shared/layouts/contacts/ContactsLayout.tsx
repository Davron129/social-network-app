import { Outlet } from 'react-router-dom';
import { Sidebar } from '@features/sidebar/components';
import { ContactList } from '@features/contacts/components';

export const ContactsLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar title="Contacts">
        <ContactList />
      </Sidebar>
      <div className="flex-1 border-l border-secondary">
        <Outlet />
      </div>
    </div>
  );
};
