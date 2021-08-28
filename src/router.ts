import { About } from './About';
import { HomePage } from './Home';

export const routers = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
];