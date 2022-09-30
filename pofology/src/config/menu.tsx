import { FiGrid, FiSettings, FiUsers } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

type MenuItem = {
  name: string;
  route: string;
  icon?: IconType | (() => IconType);
  activeRoutes: string[];
};

export const menu: MenuItem[] = [
  {
    name: 'Dashboard',
    route: 'tenant.dashboard',
    icon: HiOutlineHome,
    activeRoutes: ['tenant.dashboard'],
  },
  {
    name: 'Users',
    route: 'tenant.users.index',
    icon: FiUsers,
    activeRoutes: ['tenant.users*'],
  },
  {
    name: 'Settings',
    route: 'tenant.settings.index',
    icon: FiSettings,
    activeRoutes: ['tenant.settings*'],
  },
];
