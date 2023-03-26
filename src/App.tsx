import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { AuthRoot } from './pages/auth';
import { CartPage } from './pages/cart';
import { HomePage } from './pages/home';
import { SettingsPage } from './pages/settings';
import { PrivateRoute } from './utils/router/privateRoute';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/login" element={<AuthRoot />} />
          <Route path="/register" element={<AuthRoot />} />
        </Route>
      </Routes>
    </div>
  );
};
