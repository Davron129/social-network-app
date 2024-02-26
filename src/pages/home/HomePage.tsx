import { useEffect } from 'react';
import { ROUTE_SETTINGS } from '@shared/constants';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTE_SETTINGS);
  }, [navigate]);

  return <div>HomePage</div>;
};
