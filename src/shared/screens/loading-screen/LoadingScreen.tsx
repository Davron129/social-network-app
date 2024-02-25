import { FaSpinner } from 'react-icons/fa';

export const LoadingScreen = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center">
        <span className="text-muted text-lg animate-spin leading-none font-medium">
          <FaSpinner />
        </span>
      </div>
    </div>
  );
};
