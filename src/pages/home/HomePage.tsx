import { ROUTE_CONTACTS } from '@shared/constants';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTE_CONTACTS);
  }, [navigate]);

  return <div>HomePage</div>;
};
