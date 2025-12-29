import type { RouteObject } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { App } from '@/App.tsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export { routes };
