import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { AuthRoot } from './pages/auth';
import { HomePage } from './pages/home';
import { PrivateRoute } from './utils/router/privateRoute';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<AuthRoot />} />
        </Route>
      </Routes>
    </div>
  );
};
