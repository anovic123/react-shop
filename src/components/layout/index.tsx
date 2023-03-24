import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/register' ? (
        <>
          <Outlet />
        </>
      ) : (
        <div>
          Header
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
