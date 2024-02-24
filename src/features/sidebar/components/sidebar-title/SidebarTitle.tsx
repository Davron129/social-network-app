import { FC } from 'react';

interface Props {
  title: string;
}

export const SidebarTitle: FC<Props> = ({ title }) => {
  return (
    <div className="h-12 border-b border-secondary flex flex-2 items-center justify-center">
      <h2 className="text-sm text-white font-medium">{title}</h2>
    </div>
  );
};
