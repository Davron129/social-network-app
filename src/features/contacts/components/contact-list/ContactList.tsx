import React from 'react';
import { ContactItem } from '../contact-item';

export const ContactList = () => {
  return (
    <div className="flex-1 overflow-y-auto divide-y divide-secondary">
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};
