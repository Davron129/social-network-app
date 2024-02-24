import { FC } from 'react';

interface Props {
  title: string;
}

export const AsideTitle: FC<Props> = ({ title }) => {
  return (
    <div className="h-12 border-b border-secondary flex flex-2 items-center justify-center">
      <h2 className="text-white font-medium">{title}</h2>
    </div>
  );
};
