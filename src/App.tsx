import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout';

import {
  AuthRoot,
  CartPage,
  FavoritePage,
  HomePage,
  SettingsPage,
  SingleProductPage,
} from './pages';

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
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
          </Route>
          <Route path="/login" element={<AuthRoot />} />
          <Route path="/register" element={<AuthRoot />} />
        </Route>
      </Routes>
    </div>
  );
};
