import AuthScreen from '@pages/AuthScreen';
import DashboardScreen from '@pages/DashboardScreen';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

export interface CustomRouteProps {
  isExact: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>
    | React.ComponentType<any>;
  path: string;
}

export const routeList: CustomRouteProps[] = [
  {
    isExact: true,
    component: () => <AuthScreen />,
    path: '/sign-in',
  },
  {
    isExact: true,
    component: () => <DashboardScreen />,
    path: '/app',
  },
  {
    isExact: false,
    component: () => <DashboardScreen />,
    path: '/app/:tab-name',
  },
];
