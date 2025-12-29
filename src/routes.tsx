import type { RouteObject } from 'react-router-dom';
import { App } from '@/App.tsx';
import { HomePage } from '@/pages/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
    errorElement: <ErrorPage />,
  },
];

export { routes };
