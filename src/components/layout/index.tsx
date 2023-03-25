import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/register' ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};
