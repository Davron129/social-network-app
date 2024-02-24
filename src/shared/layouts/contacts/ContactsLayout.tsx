import { Outlet } from 'react-router-dom';
import { AsideTitle } from '@shared/components';
import { ContactList } from '@features/contacts/components';

export const ContactsLayout = () => {
  return (
    <div className="flex h-full">
      <aside className="w-[310px] flex flex-col flex-2 bg-primary">
        <AsideTitle title={'Contacts'} />
        <ContactList />
      </aside>
      <div className="flex-1 border-l border-secondary">
        <Outlet />
      </div>
    </div>
  );
};
