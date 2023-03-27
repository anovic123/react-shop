import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from './footer';
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
          <main className="content">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};
